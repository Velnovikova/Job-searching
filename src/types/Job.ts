import { Level } from "./Resume"
export default interface Job{
    id: number,
    title: string,
    company: string,
    salary: number,
    level:keyof typeof Level,
    avatar:string,
    rating:string,
    created_at:Date,
    is_salary:boolean,
    skills:string[],
    currency: keyof typeof Currency;
    activity:string[]
}
export enum Currency{
    RUB='RUB',
    USD='USD',
    EUR='EUR'
}

export type JobState={
    list:Job[]
}