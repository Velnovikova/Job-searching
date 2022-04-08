import axios from "axios";
import { AxiosPromise } from 'axios';
import { SearchTypeResumes } from "../init/useResumes";
import { SearchTypeJobs } from "../init/useJobs";
import Job from '../types/Job';
import Resumes from "../types/Resume";
import myApi from "./axios";
export const getJobs = (queryParams: SearchTypeJobs = { activity: [], level: '', skills: [], salary: 0, currency: '', page: 1 }): AxiosPromise => {
  return myApi.get('/jobs', {
    params: queryParams
  })
}
export const getResumes = (
  queryParams: SearchTypeResumes = { level: '', tags: [], experience: 0, page: 1 }
): AxiosPromise => {
  return myApi.get('/resumes', {
    params: queryParams
  });
};