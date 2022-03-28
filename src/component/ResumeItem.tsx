import React,{FC} from "react";
import { Level } from "../types/Resume"; 
import { ListItem } from "@mui/material";
import { ListItemAvatar,Avatar,ListItemText } from "@mui/material";
import{TagList} from '../style/style';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
interface Props{
    name:string,
    experience:number,
    level:keyof typeof Level,
    skills:string[]
}
const ResumeItem:FC<Props>=({name,experience,level,skills})=>{
    return(
      <ListItem  >
      <ListItemAvatar>
        <Avatar alt="image" src="./img/OIP.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{color:"green"}}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {level}<br/>
            </Typography>
            <TagList>{skills.map((tag)=>(
              <p style={{marginRight:'1%'}}>{tag}</p>
            ))}</TagList>
            {experience} years
          </React.Fragment>
        }
      />
      <Button size="small">More</Button>
    </ListItem>
    )
}
export default ResumeItem;