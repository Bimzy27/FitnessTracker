import { WorkoutType, type Exercise } from "@/data/exercise";
import type { ExerciseInstance, Set, Workout } from "@/data/workout";
import { ref } from "vue";

const workoutService = {
    exercises: ref<Exercise[]>([
        {
            id: 0,
            name: "Bench Press",
            workoutType: WorkoutType.WEIGHT_BEARING
        },
        {
            id: 1,
            name: "Incline Bench Press",
            workoutType: WorkoutType.WEIGHT_BEARING
        }
    ]),

    workouts: ref<Workout[]>([
        {
            id: 0,
            date: new Date(),
            exerciseInstanceIds: [0, 1]
        }
    ]),

    exerciseInstances: ref<ExerciseInstance[]>([
        {
            id: 0,
            exerciseId: 0,
            setIds: [0, 1]
        },
        {
            id: 1,
            exerciseId: 1,
            setIds: [2, 3]
        },
    ]),

    sets: ref<Set[]>([
        {
            id: 0,
            reps: 12,
            weight: 60
        },
        {
            id: 1,
            reps: 10,
            weight: 60
        },
        {
            id: 2,
            reps: 11,
            weight: 40
        },
        {
            id: 3,
            reps: 8,
            weight: 40
        },
    ]),

    addExerciseSet(exerciseInstanceId: number): Set
    {
        const set: Set = {id: 1, reps: 10}
        return set;
    }
}

export default workoutService;