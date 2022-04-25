import axios from "axios";
import { AxiosPromise } from 'axios';
import { SearchTypeResumes } from "../init/useResumes";
import { SearchTypeJobs } from "../init/useJobs";
import Job from '../types/Job';
import Resumes from "../types/Resume";
import myApi from "./axios";

type JobsRes={
  total:number,
  list:Job[]
}
type ResumeRes={
  total:number,
  list:Resumes[]
}

type GraphsRes={
  salary_medium_per_month:string[],
  activity_count:object[]
}
export const getJobs = (queryParams: SearchTypeJobs = { activity: [], level: '', skills: [], salary: 0, currency: '', page: 1 }): AxiosPromise<JobsRes> => {
  return myApi.get('/jobs', {
    params: queryParams
  })
}
export const getResumes = (
  queryParams: SearchTypeResumes = { level: '', tags: [], experience: 0, page: 1 }
): AxiosPromise<ResumeRes> => {
  return myApi.get('/resumes', {
    params: queryParams
  });
};
export const getGraphs=():AxiosPromise<GraphsRes>=>{
  return myApi.get('/graphs')
}