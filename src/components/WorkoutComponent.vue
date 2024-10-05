<script lang="ts" setup>
import type { Workout } from '@/data/workout';
import { type PropType } from 'vue';
import ExerciseInstanceComponent from './ExerciseInstanceComponent.vue';

const props = defineProps({
    workout: Object as PropType<Workout>
})

</script>

<template>
    <div class="div-stacked-vertical" style="background-color: cadetblue; border-radius: 5px;">
        <p>Date: {{ props.workout?.date.toLocaleDateString() }}</p>
        <div v-for="exerciseInstanceId in props.workout?.exerciseInstanceIds" :key="exerciseInstanceId">
            <ExerciseInstanceComponent :exerciseInstanceId="exerciseInstanceId"/>
        </div>
    </div>
</template>

<style>
</style>