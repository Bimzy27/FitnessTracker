export interface workout
{
    id: number
    date: Date
    setIds: number[]
}

export interface set
{
    id: number
    reps: number
    exerciseId: number
    weight?: number
    duration?: number
}
