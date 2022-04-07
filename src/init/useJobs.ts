import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setJobs } from '../reducers/jobs'
import { useSelector } from 'react-redux'
import { AppState } from '../reducers/rootReducer'
import { JobState } from '../types/Job'
import { getJobs } from '../api/quries'
import Job from '../types/Job'
import  { Level } from '../types/Resume'
import { Currency } from '../types/Job'
export type SearchTypeJobs={
  activity:string[],
  level:keyof typeof Level | '',
  skills:string[],
  salary:number,
  currency:keyof typeof Currency | '',
  page:number,
}
 type Props={
  handleChangeActivity(value:string[]):void,
  handleChangeLevel(value:keyof typeof Level):void,
  handleChangeSkills(value:string[]):void,
  handleChangeCurrency(value:keyof typeof Currency):void,
  handleChangeSalary(value:number):void,
  handleChangePage(value:number):void,
  search:SearchTypeJobs,
  list:Job[],
  total:number
}


export const useJobs = (): Props => {
    const dispatch = useDispatch();
    const { list } = useSelector<AppState, JobState>((state) => state.jobs);
    const[search,setSearch]=useState<SearchTypeJobs>({
      activity:[],
      level:'',
      skills:[],
      salary:0,
      currency:'',
      page:1.
    })
    const [total, setTotal] = useState<number>(0);
    React.useEffect(() => {
        getJobs().then((res) => {
          dispatch(setJobs(res.data.list));
         setTotal(res.data.total)
        });
      }, [dispatch]);
   const handleChangeActivity=(value:[])=>{
     const newSearch={
       ...search,
       activity:value,
     }
     setSearch(newSearch)
     getJobs(newSearch).then((res)=>{
       dispatch(setJobs(res.data.list))
     })
   }
   const handleChangeLevel=(value:keyof typeof Level | '')=>{
     const newSearch={
       ...search,
       level:value,
     }
     setSearch(newSearch)
     getJobs(newSearch).then((res)=>{
       dispatch(setJobs(res.data.list))
   })
  }
  const handleChangeSkills=(value:[])=>{
    const newSearch={
        ...search,
        skills:value
    }
    setSearch(newSearch);
    getJobs(newSearch).then((res)=>{
        dispatch(setJobs(res.data.list))
    })
}
const handleChangeCurrency=(value:keyof typeof Currency | '')=>{
  const newSearch={
    ...search,
    currency:value,
  }
  setSearch(newSearch);
    getJobs(newSearch).then((res)=>{
        dispatch(setJobs(res.data.list))
    })
}
const handleChangeSalary=(value:number)=>{
  const newSearch={
    ...search,
    salary:value,
  }
  setSearch(newSearch);
  getJobs(newSearch).then((res)=>{
    dispatch(setJobs(res.data.list))
  })
}
const handleChangePage=(value:number)=>{
  const newSearch={
    ...search,
    page:value
  }
  setSearch(newSearch);
  getJobs(newSearch).then((res)=>{
    dispatch(setJobs(res.data.list))
  })
}
      return {
        handleChangeActivity,
        handleChangeLevel,
        handleChangeSkills,
        handleChangeSalary,
        handleChangeCurrency,
        handleChangePage,
        search,
        list,
        total
      };

}