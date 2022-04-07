import React, { FC } from 'react';
import Card from '@mui/material/Card';
import { Level } from '../types/Resume';
import { Currency } from '../types/Job';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ListItem } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { Avatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import{TagList} from '../style/style';
import styled from '@emotion/styled';



interface Props {
  title: string,
  company: string,
  salary: number,
  activity: string[],
  level: keyof typeof Level,
  avatar: string,
  rating: string,
  created_at: Date,
  is_salary: boolean,
  skills: string[],
  currency: keyof typeof Currency;
}

const JobItem: FC<Props> = ({ title, company, salary, avatar, activity, level, rating, skills, currency }) => {
  return (
    <ListItem sx={{display:'flex',justifyContent:'space-between'}} >
      <div style={{width:'30%',display:'flex'}}>
        <ListItemAvatar sx={{alignSelf:'center'}}>
          <Avatar alt="image" src={avatar} />
        </ListItemAvatar>
        <ListItemText sx={{}} primary={title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="text.primary"
              >
                {company}:{rating}<br/>
              </Typography>
              {salary} {currency}
            </React.Fragment>
          }
        />
      </div>
      <div style={{width:'60%'}}>
      <ListItemText
        sx={{ marginRight: 0 }}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ color: 'green', }}
            >
              {level}
            </Typography>
            <TagList>{activity.map((act)=>(<p style={{marginRight:'5px',marginBottom:0,marginTop:0,fontSize:'16px'}}>{act}</p>))}</TagList>
            <p style={{margin:0,fontWeight:700}}>Necessary skills:</p><TagList>{skills.map((tag)=>(<p style={{marginRight:'5px',marginTop:0}}>{tag}</p>))}</TagList>

          </React.Fragment>
        }
      />
      </div>
      <Button size="small">More</Button>
    </ListItem>
  )
}


export default JobItem;
