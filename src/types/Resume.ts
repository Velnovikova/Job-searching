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
    tags: string[]

}