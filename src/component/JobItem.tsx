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
    <Card sx={{ minWidth: 275,marginBottom:"2%" }}>
    <CardMedia
      component="img"
      height="140"
      image="./img/den_programmista_kartinki_5_03205541.jpg"
      alt="image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {company}<br />{salary}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">More</Button>
    </CardActions>
  </Card>
  );
};

export default JobItem;
