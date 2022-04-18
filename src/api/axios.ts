import axios from "axios";

const myApi = axios.create({ baseURL: 'https://my-job-api-778.herokuapp.com' })
export default myApi;