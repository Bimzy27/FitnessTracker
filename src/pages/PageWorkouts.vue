<template>
    <q-page class="flex flex-center">
        <span>Workouts</span>
        <q-btn
            rounded
            color="primary"
            label="New Exercise"
            @click="CreateNewWorkout"
            :to="newWorkoutLink"
        />
        <q-list :separator="true" v-for="workout in workouts" :key="workout.id">
            <WorkoutInstanceComponent :workoutId="workout.id" />
        </q-list>
    </q-page>
</template>

<script setup lang="ts">
import WorkoutInstanceComponent from 'src/components/WorkoutInstanceComponent.vue';
import workoutService from 'src/services/workoutService';

const newWorkoutLink = '/workouts/new';
const workouts = workoutService.workouts;
function CreateNewWorkout() {
    //const workout = workoutService.addWorkout();
}
</script>
