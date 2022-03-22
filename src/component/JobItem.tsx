import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



interface Props {
  title: string;
  company: string;
  salary: number;
}

const JobItem: FC<Props> = ({ title, company, salary }) => {
  return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="div">
            {company}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {salary}
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More</Button>
        </CardActions>
      </Card>
    
  );
};

export default JobItem;
