import React from 'react'
import { useDispatch } from 'react-redux'
import { setJobs } from '../reducers/jobs'
import { useSelector } from 'react-redux'
import { AppState } from '../reducers/rootReducer'
import { JobState } from '../types/Job'
import { getJobs } from '../api/quries'

export const useJobs = (): JobState => {
    const dispatch = useDispatch();


    const { list } = useSelector<AppState, JobState>((state) => state.jobs);
    React.useEffect(() => {
        getJobs().then((res) => {
          dispatch(setJobs(res.data));
        });
      }, [dispatch]);
    
      return {
        list,
      };

}