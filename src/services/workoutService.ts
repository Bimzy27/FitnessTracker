import { WorkoutType, type Exercise } from 'src/data/exercise';
import type { ExerciseInstance, Set, Workout } from 'src/data/workout';
import { ref } from 'vue';

const workoutService = {
    exercises: ref<Exercise[]>([
        {
            id: 0,
            name: 'Bench Press',
            workoutType: WorkoutType.WEIGHT_BEARING,
        },
        {
            id: 1,
            name: 'Incline Bench Press',
            workoutType: WorkoutType.WEIGHT_BEARING,
        },
        {
            id: 2,
            name: 'Treadmill',
            workoutType: WorkoutType.CARDIO,
        },
    ]),

    workouts: ref<Workout[]>([
        {
            id: 0,
            date: new Date(),
            exerciseInstanceIds: [0, 1],
        },
        {
            id: 1,
            date: new Date(),
            exerciseInstanceIds: [2],
        },
    ]),

    exerciseInstances: ref<ExerciseInstance[]>([
        {
            id: 0,
            exerciseId: 0,
            setIds: [0, 1],
        },
        {
            id: 1,
            exerciseId: 1,
            setIds: [2, 3],
        },
        {
            id: 2,
            exerciseId: 0,
            setIds: [4],
        },
    ]),

    sets: ref<Set[]>([
        {
            id: 0,
            reps: 12,
            weight: 60,
        },
        {
            id: 1,
            reps: 10,
            weight: 60,
        },
        {
            id: 2,
            reps: 11,
            weight: 40,
        },
        {
            id: 3,
            reps: 8,
            weight: 40,
        },
        {
            id: 4,
            reps: 20,
            weight: 30,
        },
    ]),

    getExercise(id: number): Exercise {
        const e: Exercise | undefined = this.exercises.value.find(
            (e) => e.id === id
        );
        if (e) {
            return e;
        }
        throw new Error('Exercise not found for id ' + id);
    },

    getWorkout(id: number): Workout {
        const w: Workout | undefined = this.workouts.value.find(
            (e) => e.id === id
        );
        if (w) {
            return w;
        }
        throw new Error('Workout not found for id ' + id);
    },

    getExerciseInstance(id: number): ExerciseInstance {
        const ei: ExerciseInstance | undefined =
            this.exerciseInstances.value.find((e) => e.id === id);
        if (ei) {
            return ei;
        }
        throw new Error('Exercise instance not found for id ' + id);
    },

    getSet(id: number): Set {
        const s: Set | undefined = this.sets.value.find((e) => e.id === id);
        if (s) {
            return s;
        }
        throw new Error('Set not found for id ' + id);
    },

    addWorkout(): Workout {
        const newId = Math.max(
            Math.max(...this.workouts.value.map((wkt) => wkt.id)) + 1,
            0
        );
        const workout = {
            id: newId,
            date: new Date(),
            exerciseInstanceIds: [],
        };
        this.workouts.value.push(workout);
        return workout;
    },

    removeExerciseSet(exerciseInstanceId: number, setId: number): void {
        const exersizeInstance = this.getExerciseInstance(exerciseInstanceId);
        exersizeInstance.setIds = exersizeInstance.setIds.filter(
            (s) => s !== setId
        );
        this.sets.value = this.sets.value.filter((s) => s.id !== setId);
    },

    addExerciseSet(exerciseInstanceId: number): void {
        const ei = this.getExerciseInstance(exerciseInstanceId);
        const newId = Math.max(
            Math.max(...this.sets.value.map((set) => set.id)) + 1,
            0
        );
        const prevSet =
            ei.setIds.length > 0
                ? this.getSet(ei.setIds[ei.setIds.length - 1])
                : { id: -1, reps: 10, weight: 30 };
        const set: Set = {
            id: newId,
            reps: prevSet.reps,
            weight: prevSet.weight,
        };
        this.sets.value.push(set);
        ei.setIds.push(newId);
    },

    addExerciseInstance(workoutId: number, exerciseInstance: ExerciseInstance) {
        const workout = this.getWorkout(workoutId);
        const newId = Math.max(
            Math.max(...this.exerciseInstances.value.map((ei) => ei.id)) + 1,
            0
        );
        exerciseInstance.id = newId;
        this.exerciseInstances.value.push(exerciseInstance);
        workout.exerciseInstanceIds.push(newId);
    },

    removeExerciseInstance(workoutId: number, exerciseInstanceId: number) {
        const workout = this.getWorkout(workoutId);
        const workoutIndex = workout.exerciseInstanceIds.findIndex(
            (ei) => ei === exerciseInstanceId
        );
        workout.exerciseInstanceIds.splice(workoutIndex, 1);

        const index = this.exerciseInstances.value.findIndex(
            (ei) => ei.exerciseId === exerciseInstanceId
        );
        this.exerciseInstances.value.splice(index, 1);
    },

    addExercise(exercise: Exercise) {
        const newId = Math.max(
            Math.max(...this.exercises.value.map((ex) => ex.id)) + 1,
            0
        );
        exercise.id = newId;
        this.exercises.value.push(exercise);
    },

    removeExercise(exerciseId: number): boolean {
        let workoutContainsExercise = false;
        this.workouts.value.forEach((workout) => {
            workout.exerciseInstanceIds.forEach((eiId) => {
                const ei = this.getExerciseInstance(eiId);
                if (ei.exerciseId == exerciseId) {
                    workoutContainsExercise = true;
                    return;
                }
            });
        });

        if (workoutContainsExercise) {
            return false;
        }

        const index = this.exercises.value.findIndex(
            (exercise) => exercise.id === exerciseId
        );
        if (index !== -1) {
            this.exercises.value.splice(index, 1);
            return true;
        }

        return false;
    },
};

export default workoutService;
