import { useDispatch,useSelector } from 'react-redux'
import React from 'react'
import { AppState } from '../reducers/rootReducer'
import {ResumesState, setResumes } from '../reducers/resumes'
import Resumes, { Level } from '../types/Resume'
import { getResumes } from '../api/quries'
import { useState } from 'react'
export type SearchTypeResumes={
    level:keyof typeof Level | '',
    tags:string[],
    experience:0,
    page:number
}
type Props={
    handleChangeLevel(value:keyof typeof Level|''):void,
    handleChangeSkills(value:string[]):void,
    handleChangeExperience(value: 0):void,
    handleChangePage(value:number):void
    search:SearchTypeResumes,
    list:Resumes[],
    total:number
}
export const useResumes = (): Props => {
    const [search,setSearch]=useState<SearchTypeResumes>({
        level: '',
        tags:[],
        experience:0,
        page:1
    })
    const dispatch = useDispatch();
    const { list } = useSelector<AppState, ResumesState>((state) => state.resumes)
    const [total, setTotal] = useState<number>(0);
    React.useEffect(()=>{
        getResumes().then((res)=>{
            dispatch(setResumes(res.data.list))
            setTotal(res.data.total)
        })
    },[dispatch]);
    const handleChangeLevel=(value:keyof typeof Level | '')=>{
        const newSearch={
            ...search,
            level:value
        }
        setSearch(newSearch);
        getResumes(newSearch).then((res)=>{
            dispatch(setResumes(res.data.list))
        })

    }
    const handleChangeSkills=(value:[])=>{
        const newSearch={
            ...search,
            tags:value
        }
        setSearch(newSearch);
        getResumes(newSearch).then((res)=>{
            dispatch(setResumes(res.data.list))
        })
    }
    const handleChangeExperience=(value:0)=>{
        const newSearch={
            ...search,
            experience:value
        }
        setSearch(newSearch);
        getResumes(newSearch).then((res)=>{
            dispatch(setResumes(res.data.list))
        })
    }
    const handleChangePage=(value:number)=>{
        const newSearch={
          ...search,
          page:value
        }
        setSearch(newSearch);
        getResumes(newSearch).then((res)=>{
          dispatch(setResumes(res.data.list))
        })
      }
    return{
        handleChangeLevel,
        handleChangeSkills,
        handleChangeExperience,
        handleChangePage,
        list,
        search,
        total
    }
}