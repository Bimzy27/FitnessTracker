<script lang="ts" setup>
import WorkoutComponent from '@/components/WorkoutComponent.vue';
import workoutService from '@/services/workoutService';

const workoutData = workoutService.workouts.value[0];
</script>

<template>
    <div class="div-stacked-vertical">
        <label>Workouts View</label>
        <WorkoutComponent :workout=workoutData />
    </div>
</template>

<style scoped>
</style>