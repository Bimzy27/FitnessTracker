export interface Workout
{
    id: number
    date: Date
    setIds: number[]
}

export interface Set
{
    id: number
    reps: number
    exerciseId: number
    weight?: number
    duration?: number
}
