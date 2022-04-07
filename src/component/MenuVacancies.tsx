import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';
import { ListItemText } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { InputAdornment, Input } from '@mui/material';
import { MenuForm, Salary } from '../style/style';
import { Level, } from '../types/Resume';
import { Currency } from '../types/Job';

type Props = {
  selectedLevel: keyof typeof Level | '',
  selectedSkills: string[],
  selectedSalary: number,
  selectedCurrency: keyof typeof Currency | '',
  handleChangeLevel(param: string): void,
  handleChangeSkills(param: string[]): void,
  handleChangeSalary(param: number): void,
  handleChangeCurrency(param: string): void,
  handleChangeActivity(param: string[]): void,
}
export default function MenuVacancies({  selectedLevel, selectedSkills, selectedSalary, selectedCurrency, handleChangeActivity, handleChangeLevel, handleChangeSkills, handleChangeSalary, handleChangeCurrency }: Props) {
  const [check, setCheck] = useState<string[]>([])
  const handleChangeActivityNew = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (check.indexOf(event.target.value)>-1) {
      const newCheck = check.filter(elem => elem != event.target.value);
      setCheck(newCheck)
      console.log(newCheck)
      handleChangeActivity(newCheck)
    }
    else {
      const newCheck = [
        ...check,
        event.target.value
      ]
      console.log(newCheck);
      setCheck(newCheck)
      handleChangeActivity(newCheck)
    }

  }
  const handleChangeLevelNew = (e: SelectChangeEvent) => {
    handleChangeLevel(e.target.value as string)
  }
  const handleChangeSkillsNew = (event: SelectChangeEvent<typeof selectedSkills>) => {
    const {
      target: { value },
    } = event;
    console.log(value)

    handleChangeSkills(typeof value === 'string' ? value.split(',') : value);
  };
  const handleChangeSalaryNew = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeSalary(e.target.value as unknown as number)
  }
  const handleChangeCurrencyNew = (e: SelectChangeEvent) => {
    handleChangeCurrency(e.target.value as string)
  }

  const activities = ['Frontend', 'Backend', 'Design', 'Analytics', 'Testing', 'Administration', 'Management', 'Marketing', 'Applications']
  const tags = ['react', 'php', 'typescript', 'redux', 'html', 'css', 'ruby', 'unix', 'mysql'];
  return (

    <MenuForm>

      <h3>Сфера деятельности</h3>

      {activities.map((activity) => (
        <FormControlLabel control={<Checkbox onChange={handleChangeActivityNew} value={activity} />} label={activity}></FormControlLabel>
      ))}

      <FormControl>
        <h3>Квалификация</h3>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedLevel}
          onChange={handleChangeLevelNew}

        >
          <MenuItem value={Level.Junior}>Junior</MenuItem>
          <MenuItem value={Level.Middle}>Middle</MenuItem>
          <MenuItem value={Level.Senior}>Senior</MenuItem>
        </Select>
      </FormControl>
      <FormControl >
        <h3>Професиональные навыки</h3>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedSkills}
          onChange={handleChangeSkillsNew}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(', ')}
        >
          {tags.map((tag) => (
            <MenuItem key={tag} value={tag}>
              <Checkbox />
              <ListItemText primary={tag} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormGroup >
        <h3>Зарплата</h3>
        <Salary>
          <TextField value={selectedSalary} label="От" sx={{ width: '70%' }} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} onChange={handleChangeSalaryNew} />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCurrency}
            onChange={handleChangeCurrencyNew}
            sx={{ width: '20%', marginLeft: 'auto' }}
          >
            <MenuItem value={Currency.RUB}>₽</MenuItem>
            <MenuItem value={Currency.USD}>$</MenuItem>
            <MenuItem value={Currency.EUR}>€</MenuItem>
          </Select>
        </Salary>
        <FormControlLabel control={<Checkbox />} label={'Указана'}></FormControlLabel>
      </FormGroup>
    </MenuForm>
  )
}