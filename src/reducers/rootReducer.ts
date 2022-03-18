import Job from '../types/Job'
import { combineReducers } from 'redux';
export const SET_JOBS = 'SET_JOBS';
export type setJobsAction = {//типизируем action
    type: typeof SET_JOBS,
    payload: Job[]
}
type Action = setJobsAction//для удобства создаем тип уже типизированного action, чтобы типизировать,выходные данные из action, это возвращаемый action
export function setJobs(payload: Job[]): Action {
    return {
        type: SET_JOBS,
        payload,
    }
}
const initialState = {// создаем начальное пустое состояние 
    list: []
}
interface State { // типизируем обычное состояние, в котором должен быть массив вакансий
    list: Job[];
}
export const jobs = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_JOBS: {
            return {
                list: action.payload
            }
        }
        default: {
            return state
        }
    }
}
export const rootReducer = combineReducers({
    jobs,
})
export type AppState = ReturnType<typeof rootReducer>