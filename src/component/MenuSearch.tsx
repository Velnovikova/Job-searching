import React, { FC } from "react";
import { Stack } from "@mui/material";
import { Autocomplete, TextField } from "@mui/material";
import { SearchMenu } from "../style/style";
interface Props {
    title: string
}
const MenuSearch: FC<Props> = ({ title }) => {

    return (
        <SearchMenu>

            <Stack  spacing={2} sx={{ width: 300, background: "white", height: '3rem', marginRight: '1%', borderRadius: '3%' }}>
                <h3>{title}</h3>
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={prompting.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} label="Search..." />}
                />
            </Stack>
        </SearchMenu>
    )
}
export default MenuSearch;
const prompting = [{ title: 'The Shawshank Redemption', year: 1994 },
{ title: 'The Godfather', year: 1972 },
{ title: 'The Godfather: Part II', year: 1974 },
{ title: 'The Dark Knight', year: 2008 },
{ title: '12 Angry Men', year: 1957 },
{ title: "Schindler's List", year: 1993 },
{ title: 'Pulp Fiction', year: 1994 },]