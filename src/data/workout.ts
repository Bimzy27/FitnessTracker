export interface Workout
{
    id: number
    date: Date
    exerciseInstanceIds: number[]
}

export interface ExerciseInstance
{
    id: number
    exerciseId: number
    setIds: number[]
}

export interface Set
{
    id: number
    reps: number
    weight?: number
    duration?: number
}