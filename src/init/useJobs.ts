import React from 'react'
import { useDispatch } from 'react-redux'
import { setJobs } from '../reducers/rootReducer'
import { useSelector } from 'react-redux'
import { AppState } from '../reducers/rootReducer'
import {JobState}from '../types/Job'

export const useJobs=():JobState=>{
    const dispatch=useDispatch();
    const items = [
        {id: 1, title: 'product 1', salary: 100, company: 'NY'},
        {id: 2, title: 'product 2', salary: 100, company: 'NY'},
        {id: 3, title: 'product 3', salary: 100, company: 'NY'},
        {id: 4, title: 'product 4', salary: 100, company: 'NY'},
      ]
      const { list } = useSelector<AppState, JobState>((state) => state.jobs);
      React.useEffect(() => {
        
          dispatch(setJobs(items));
    ;
      }, [dispatch]);
      return{
          list
      }

}