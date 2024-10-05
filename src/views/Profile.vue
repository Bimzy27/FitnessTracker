<script lang="ts" setup>
import { useWorkoutsStore } from '@/stores/workouts';

const store = useWorkoutsStore();

</script>

<template>
    <div class="div-stacked-vertical">
        <label>Profile View</label>
        <label>Total Workouts: {{store.workoutCount}}</label>
    </div>
</template>

<style scoped>
</style>