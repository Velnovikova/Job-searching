import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

type Props={
  activities:object[]
}
ChartJS.register(ArcElement, Tooltip, Legend);

export function ActivityChart({activities}:Props){

 const labelsNew=activities.map((item)=>{
   return Object.keys(item)[0]
 })
const ratingListNew=activities.map((item=>{
  return Object.values(item)[0]
}))

  

 const data = {
  labels: labelsNew,
  datasets: [
    {
      label: 'The most popular vacancies',
      data: ratingListNew,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      
    },
  ],
};


  return <Doughnut data={data} />;
}
