import axios from "axios";
import { AxiosPromise } from 'axios';
import Job from '../types/Job';
import myApi from "./axios";
export const getJobs=():AxiosPromise<Job[]>=>{
    return myApi.get('/')
}