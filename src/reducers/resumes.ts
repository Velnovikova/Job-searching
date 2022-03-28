import Resumes from "../types/Resume"
export const SET_RESUMES = 'SET_RESUMES';
export function setResumes(payload: Resumes[]): Action {
    return {
        type: SET_RESUMES,
        payload
    }
}
export type setResumesAction = {
    type: typeof SET_RESUMES,
    payload: Resumes[]
}
export type ResumesState={
    list:Resumes[]
}
type Action = setResumesAction
interface State {
    list: Resumes[]
}
const initialState = {
    list: []
}
export const resumes = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_RESUMES: {
            return {
                list: action.payload
            }
        }
        default: {
            return state;
        }
    }
}