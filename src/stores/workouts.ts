import { defineStore } from "pinia";

export const useWorkoutsStore = defineStore("workouts",
    {
        state: () => {
            return { workoutCount: 0 }
        }
    }
)