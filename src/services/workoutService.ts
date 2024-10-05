import { WorkoutType, type Exercise } from "@/data/exercise";
import type { Set, Workout } from "@/data/workout";
import { ref } from "vue";

const workoutService = {
    workouts: ref<Workout[]>([
        {
            id: 0,
            date: new Date(),
            setIds: [0, 1]
        }
    ]),

    sets: ref<Set[]>([
        {
            id: 0,
            reps: 12,
            exerciseId: 0,
            weight: 60
        },
        {
            id: 1,
            reps: 10,
            exerciseId: 0,
            weight: 60
        }
    ]),

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
    ])
}

export default workoutService;