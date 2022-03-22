export default interface Job{
    id: number,
    title: string,
    company: string,
    salary: number,
}
export type JobState={
    list:Job[]
}