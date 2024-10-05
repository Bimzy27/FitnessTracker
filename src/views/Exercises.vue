<script lang="ts" setup>
import ExerciseComponent from '@/components/ExerciseComponent.vue';
import workoutService from '@/services/workoutService';

const exercisesData = workoutService.exercises.value;
</script>

<template>
    <div class="div-stacked-vertical">
        <label>Exercises View</label>
        <div v-for="exercise in exercisesData" :key="exercise.id">
            <ExerciseComponent :exercise=exercise />
        </div>
    </div>
</template>

<style scoped>
</style>