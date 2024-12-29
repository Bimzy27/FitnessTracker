<template>
    <q-page class="flex flex-center">
        Workout: {{ workout.date.toLocaleString() }}
        <WorkoutComponent :workout="workout" />
    </q-page>
</template>

<script setup lang="ts">
import WorkoutComponent from 'src/components/WorkoutComponent.vue';
import { Workout } from 'src/data/workout';

const workout: Workout = {
    id: -1,
    date: new Date(),
    exerciseInstanceIds: [],
};
</script>
