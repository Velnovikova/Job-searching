import React from "react";
import { Link } from 'react-router-dom';
import { Box, minWidth } from "@mui/system";
import { AppBar, Toolbar } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { Stack } from "@mui/material";
import { Autocomplete, TextField } from "@mui/material";
import { LinkItem, Searching } from "../style/style";
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Header() {
    return (
        <AppBar  style={{ position:'static',background: 'black',width:'100%' }}>
           <Toolbar>
                <Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: '500', textTransform: 'uppercase' }}><LinkItem>Jobs</LinkItem></Link>
                <Link to="/expenses" style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: '500', textTransform: 'uppercase' }}><LinkItem>Specialist</LinkItem></Link>
                <Link to="/invoices" style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: '500', textTransform: 'uppercase' }}><LinkItem>Companies</LinkItem></Link>
                <Link to="/salaries" style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: '500', textTransform: 'uppercase' }}><LinkItem>Salaries</LinkItem></Link>
                <Searching>
                    <Stack spacing={2} sx={{ width: 300, background: "white", height: '3rem',marginRight:'1%', borderRadius:'3%' }}>
                        <Autocomplete
                            id="free-solo-demo"
                            freeSolo
                            options={prompting.map((option) => option.title)}
                            renderInput={(params) => <TextField {...params} label="Search..." />}
                        />
                    </Stack>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Age"
                        style={{ background: 'white', height: '3rem' }}
                    >
                        <MenuItem value={10}>Compliance</MenuItem>
                        <MenuItem value={20}>By posting date</MenuItem>
                        <MenuItem value={30}>Descending salary</MenuItem>
                        <MenuItem value={30}>Increasing salary</MenuItem>
                    </Select>
                </Searching>
                <Link to="/profile" style={{ textDecoration: 'none', color: 'white', fontSize: '18px', fontWeight: '500', textTransform: 'uppercase',marginLeft: 'auto' }}><LinkItem>Profile</LinkItem></Link>
                
            </Toolbar>
        </AppBar>

    )

}
const prompting = [{ title: 'The Shawshank Redemption', year: 1994 },
{ title: 'The Godfather', year: 1972 },
{ title: 'The Godfather: Part II', year: 1974 },
{ title: 'The Dark Knight', year: 2008 },
{ title: '12 Angry Men', year: 1957 },
{ title: "Schindler's List", year: 1993 },
{ title: 'Pulp Fiction', year: 1994 },]
