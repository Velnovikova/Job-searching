import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { OutlinedInput } from '@mui/material';
import { ListItemText } from '@mui/material';
import { MenuForm } from '../style/style';
import { Level } from '../types/Resume';


type Props = {
  selectedLevel: keyof typeof Level | '',
  selectedSkills: string[],
  selectedExperience: number,
  handleChangeLevel(param: string): void,
  handleChangeSkills(param: string[]): void,
  handleChangeExperience(param: number): void,


}
export default function MenuResumes({ selectedLevel, selectedSkills, selectedExperience, handleChangeLevel, handleChangeSkills, handleChangeExperience }: Props) {
  const handleChangeLevelNew = (event: SelectChangeEvent) => {
    handleChangeLevel(String(event.target.value))
  }
  const handleChangeSkillsNew = (event: SelectChangeEvent<typeof selectedSkills>) => {
    const {
      target: { value },
    } = event;

    handleChangeSkills(typeof value === 'string' ? value.split(',') : value);
  };
  const handleChangeExperienceNew = (event: SelectChangeEvent<number>) => {
    handleChangeExperience (Number(event.target.value))
  }
  const tags = ['react', 'php', 'typescript', 'redux', 'html', 'css', 'ruby', 'unix', 'mysql'];


  return (

    <MenuForm>
      <FormControl >
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
              <Checkbox checked={selectedSkills.indexOf(tag) > -1} />
              <ListItemText primary={tag} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl >
        <h3>Опыт работы</h3>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedExperience}
          onChange={handleChangeExperienceNew}

        >
          <MenuItem value={0}>Любой</MenuItem>
          <MenuItem value={1}>От 1 года</MenuItem>
          <MenuItem value={2}>От 2-х лет</MenuItem>
          <MenuItem value={3}>От 3-х лет</MenuItem>
          <MenuItem value={4}>От 4-х лет</MenuItem>
          <MenuItem value={5}>От 5-ти лет</MenuItem>
          <MenuItem value={6}>От 6-ти лет</MenuItem>

        </Select>
      </FormControl>
    </MenuForm>
  )
}