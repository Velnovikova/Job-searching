import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import styled from '@emotion/styled';
import { height } from '@mui/system';
import {MenuForm, Salary} from '../style/style';
import { response } from '../api/axios';

export default function Menu() {

  
  return (

    <MenuForm>
      <FormGroup><h3>Сфера деятельности</h3>
        <FormControlLabel control={<Checkbox />} label={'Фронтенд'}></FormControlLabel>
        <FormControlLabel control={<Checkbox />} label={'Бэкенд'}></FormControlLabel>
        <FormControlLabel control={<Checkbox />} label={'Приложения'}></FormControlLabel>
        <FormControlLabel control={<Checkbox />} label={'Разработка ПО'}></FormControlLabel>
        <FormControlLabel control={<Checkbox />} label={'Тестирование'}></FormControlLabel>
        <FormControlLabel control={<Checkbox />} label={'Администрирование'}></FormControlLabel>
      </FormGroup>
      <FormControl >
        <h3>Квалификация</h3>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
        >
          <MenuItem value={10}>Любая</MenuItem>
          <MenuItem value={20}>Квалификация</MenuItem>
          <MenuItem value={30}>Квалификация</MenuItem>
        </Select>
      </FormControl>
      <FormControl >
        <h3>Професиональные навыки</h3>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
        >
          <MenuItem value={10}>Навык</MenuItem>
          <MenuItem value={20}>Навык</MenuItem>
          <MenuItem value={30}>Навык</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
        <h3>Зарплата</h3>
        <Salary>
          <TextField
            id="outlined-start-adornment"
            sx={{ width: '70%'}}
            InputProps={{
              startAdornment: <InputAdornment position="start">От</InputAdornment>,
            }}
          />
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          sx={{width:'20%',marginLeft:'auto'}}
        >
          <MenuItem value={10}>₽</MenuItem>
          <MenuItem value={20}>$</MenuItem>
          <MenuItem value={30}>€</MenuItem>
        </Select>
        </Salary>
        <FormControlLabel control={<Checkbox />} label={'Указана'}></FormControlLabel>
      </FormGroup>
    </MenuForm>
  )
}