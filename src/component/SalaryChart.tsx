import React from 'react';
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
type Props={
    salaries:string[]
}
export default function SalaryChart({salaries}:Props) {
    ChartJS.register(CategoryScale, LinearScale,BarElement,Title,Tooltip,Legend
        );
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
            datasets: [{
                label:'Salary medium per month',
                data: salaries,
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }]
        }
    return (
        <div>
            <Bar data={data} />
        </div>
    )
}
