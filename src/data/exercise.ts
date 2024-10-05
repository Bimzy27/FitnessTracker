export interface Exercise
{
    id: number
    name: string
    workoutType: WorkoutType
}

export enum WorkoutType
{
    WEIGHT_BEARING,
    CARDIO,
}