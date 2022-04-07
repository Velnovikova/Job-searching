import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import { ListItemText } from '@mui/material';
import { MenuForm, Salary } from '../style/style';
import { Level} from '../types/Resume';


type Props = {
  selectedLevel: keyof typeof Level | '',
  selectedSkills: string[],
  handleChangeLevel(param: string): void,
  handleChangeSkills(param: string[]): void,
 

}
export default function MenuResumes({ selectedLevel, selectedSkills, handleChangeLevel, handleChangeSkills }: Props) {
  const handleChangeLevelNew = (e: SelectChangeEvent) => {
    handleChangeLevel(e.target.value as string)
    console.log(e.target.value)
  }
  const handleChangeSkillsNew = (event: SelectChangeEvent<typeof selectedSkills>) => {
    const {
      target: { value },
    } = event;

    handleChangeSkills(typeof value === 'string' ? value.split(',') : value);
  };
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
        <InputLabel id="demo-simple-select-label"></InputLabel>
        
        
      </FormControl>
    </MenuForm>
  )
}