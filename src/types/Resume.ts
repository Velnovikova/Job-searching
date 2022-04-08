export enum Level {
    Junior = 'Junior',
    Middle = 'Middle',
    Senior = 'Senior'
}
export default interface Resumes {
    id: number,
    name: string,
    experience: number,
    level: keyof typeof Level,
    tags: string[],
    avatar: string,
    is_search_job: boolean,
    created_at: Date,
    city: string,

}