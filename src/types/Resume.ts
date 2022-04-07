export enum Level {
    Junior = 'Junior',
    Middle = 'Middle',
    Senior = 'Senior'
}
export enum Start{
    One=1,
    Two,
    Three
}
export enum Middle{
    For
}

export default interface Resumes {
    id: number,
    name: string,
    experience: number,
    level: keyof typeof Level,
    tags: string[],
    avatar:string,
    is_search_job:boolean,
    created_at:Date,
    city:string,

}