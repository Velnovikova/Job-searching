import { useSelector } from "react-redux"
import React, { useState } from 'react'
import { getGraphs } from '../api/quries'


type Props ={
    salary_medium_per_month:string[],
    activity_count:object[],
}
export const useGraphs=():Props=>{
    const [salary_medium_per_month,setSalary]=useState<string[]>([])
    const[activity_count,setActivity]=useState<object[]>([])
    
    
    React.useEffect(() => {
        getGraphs().then((res)=>{
            setSalary(res.data.salary_medium_per_month)
            setActivity(res.data.activity_count);
        });
      }, []);
    return{
        salary_medium_per_month,
        activity_count,
    }
}