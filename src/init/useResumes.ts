import { useDispatch,useSelector } from 'react-redux'
import React from 'react'
import { AppState } from '../reducers/rootReducer'
import { resumes, ResumesState, setResumes } from '../reducers/resumes'
import Resumes, { Level } from '../types/Resume'
import { getResumes } from '../api/quries'
import { useState } from 'react'
export type SearchType={
    level:keyof typeof Level | '',
    tags:string[]
}
type Props={
    handleChangeLevel(value:keyof typeof Level):void,
    handleChangeSkills(value:string[]):void,
    search:SearchType,
    list:Resumes[],
}
export const useResumes = (): Props => {
    const [search,setSearch]=useState<SearchType>({
        level: '',
        tags:[]
    })
    const dispatch = useDispatch();
    const { list } = useSelector<AppState, ResumesState>((state) => state.resumes)
    React.useEffect(()=>{
        getResumes().then((res)=>{
            dispatch(setResumes(res.data))
        })
    },[dispatch]);
    const handleChangeLevel=(value:keyof typeof Level | '')=>{
        const newSearch={
            ...search,
            level:value
        }
        setSearch(newSearch);
        getResumes(newSearch).then((res)=>{
            dispatch(setResumes(res.data))
        })

    }
    const handleChangeSkills=(value:[])=>{
        const newSearch={
            ...search,
            tags:value
        }
        setSearch(newSearch);
        getResumes(newSearch).then((res)=>{
            dispatch(setResumes(res.data))
        })
    }
    return{
        handleChangeLevel,
        handleChangeSkills,
        list,
        search
    }
}