import axios from "axios";
import { AxiosPromise } from 'axios';
import { SearchType } from "../init/useResumes";
import Job from '../types/Job';
import Resumes from "../types/Resume";
import myApi from "./axios";
export const getJobs=():AxiosPromise<Job[]>=>{
    return myApi.get('/')
}
export const getResumes = (
    queryParams: SearchType = { level: '',tags:[] }
  ): AxiosPromise<Resumes[]> => {
    return myApi.get('/resumes', {
      params: queryParams
    });
  };