<script lang="ts" setup>
import SetComponent from './SetComponent.vue';
import workoutService from '@/services/workoutService';
import { type PropType } from 'vue';

const props = defineProps({
    exerciseInstanceId: Object as PropType<number>
})

const exerciseInstance = workoutService.getExerciseInstance(props.exerciseInstanceId!);
const exercise = workoutService.exercises.value.find((e)=>e.id === exerciseInstance?.exerciseId);
if (!exerciseInstance)
{
    console.error("Exercise instance not found for id: ", props.exerciseInstanceId);
}

function removeSet()
{
    const newId = workoutService.sets.value.reduce((acc, set) => Math.max(acc, set.id), 0) + 1;
    workoutService.sets.value.push({id: newId, reps: 10});
    exerciseInstance?.setIds.push(newId);
}

function addSet()
{
    workoutService.addExerciseSet(props.exerciseInstanceId!);
}
</script>

<template>
    <div class="div-stacked-horizontal" style="background-color:aquamarine; border-radius: 5px;">
        <label>Exercise: {{ exercise?.name }}</label>
        <button @click="removeSet()">-</button>
        <div v-for="setId in exerciseInstance?.setIds" :key="setId">
            <SetComponent :setId="setId"/>
        </div>
        <button @click="addSet()">+</button>
    </div>
</template>

<style>
</style>