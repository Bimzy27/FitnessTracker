<script lang="ts" setup>
import SetComponent from './SetComponent.vue';
import workoutService from '@/services/workoutService';
import { type PropType } from 'vue';

const props = defineProps({
    exerciseInstanceId: Object as PropType<number>
})

const exerciseInstance = workoutService.getExerciseInstance(props.exerciseInstanceId!);
const exercise = workoutService.getExercise(exerciseInstance?.exerciseId);
if (!exerciseInstance)
{
    console.error("Exercise instance not found for id: ", props.exerciseInstanceId);
}

function removeSet()
{
    workoutService.removeExerciseSet(props.exerciseInstanceId!, exerciseInstance.setIds[exerciseInstance.setIds.length - 1]);
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