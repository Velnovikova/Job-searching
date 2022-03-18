import React from 'react'
import { useDispatch } from 'react-redux'
import { setJobs } from '../reducers/jobs'
import { useSelector } from 'react-redux'
import { AppState } from '../reducers/rootReducer'
import { JobState } from '../types/Job'
import { response } from '../api/axios'

export const useJobs = (): JobState => {
    const dispatch = useDispatch();


    const { list } = useSelector<AppState, JobState>((state) => state.jobs);
    React.useEffect(() => {
        response.then((res) =>
            dispatch(setJobs(res.data))
        )
    }, [dispatch]);
    return {
        list
    }

}