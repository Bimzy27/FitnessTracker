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


    getExercise(id:number) : Exercise
    {
        const e: Exercise | undefined = this.exercises.value.find((e)=>e.id === id);
        if (e)
        {
            return e;
        }
        throw new Error('Exercise not found');
    },

    getWorkout(id:number) : Workout
    {
        const w: Workout | undefined = this.workouts.value.find((e)=>e.id === id);
        if (w)
        {
            return w;
        }
        throw new Error('Workout not found');
    },

    getExerciseInstance(id:number) : ExerciseInstance
    {
        const ei: ExerciseInstance | undefined = this.exerciseInstances.value.find((e)=>e.id === id);
        if (ei)
        {
            return ei;
        }
        throw new Error('Exercise instance not found');
    },

    getSet(id:number) : Set
    {
        const s: Set | undefined = this.sets.value.find((e)=>e.id === id);
        if (s)
        {
            return s;
        }
        throw new Error('Set not found');
    },
    
    removeExerciseSet(exerciseInstanceId: number, setId: number): void
    {
        const exersizeInstance = this.getExerciseInstance(exerciseInstanceId);
        exersizeInstance.setIds = exersizeInstance.setIds.filter(s => s !== setId);
        this.sets.value = this.sets.value.filter(s => s.id !== setId);
    },

    addExerciseSet(exerciseInstanceId: number): void
    {
        const ei = this.getExerciseInstance(exerciseInstanceId);
        const newId = Math.max(...this.sets.value.map(set => set.id)) + 1;
        const prevSet = this.getSet(ei.setIds[ei.setIds.length - 1]);
        const set: Set = {id: newId, reps: prevSet.reps, weight: prevSet.weight }
        this.sets.value.push(set);
        ei.setIds.push(newId);
    },
}

export default workoutService;