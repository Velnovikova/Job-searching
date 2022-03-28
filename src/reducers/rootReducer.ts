import { combineReducers } from 'redux';
import { resumes } from './resumes';
import { jobs } from './jobs';

export const rootReducer = combineReducers({
    jobs,
    resumes
})
export type AppState = ReturnType<typeof rootReducer>