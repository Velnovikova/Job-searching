import React from 'react';
import { useState } from 'react';
import { ListItem, ListItemText,List,ButtonGroup,Button } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
type Props = {
    labels: string[],
    handleChangeLike(param:string):void,
    handleChangeDislike(param:string):void
}
export default function CompanyRating({ labels,handleChangeLike,handleChangeDislike }: Props) {
    const [disabled,setDisabled]=useState<boolean>(false)
    return (
        <List sx={{ display: 'flex', flexDirection: 'column', width: '40%',marginLeft:'5%' }}>
            {labels.map((item) => <ListItem >
                <ListItemText sx={{margin:0,width:'60%'}}>{item}</ListItemText>
                <ButtonGroup sx={{marginRight:'auto'}}>
                    <Button disabled={disabled} onClick={()=>{handleChangeLike(item);setDisabled(true)}} sx={{color:'green ',borderColor:'black',opacity:'0.5'}}><ThumbUpAltIcon/></Button>
                    <Button disabled={disabled} onClick={()=>{handleChangeDislike(item);setDisabled(true)}} sx={{color:'red',borderColor:'black',opacity:'0.5'}}><ThumbDownIcon/></Button>
                </ButtonGroup>
            </ListItem>)}
        </List>
    )
}
