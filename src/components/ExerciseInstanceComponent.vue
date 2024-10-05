<script lang="ts" setup>
import SetComponent from './SetComponent.vue';
import workoutService from '@/services/workoutService';
import { type PropType } from 'vue';

const props = defineProps({
    exerciseInstanceId: Object as PropType<number>
})

const exerciseInstance = workoutService.exerciseInstances.value.find((ei)=>ei.id === props.exerciseInstanceId);
const exercise = workoutService.exercises.value.find((e)=>e.id === exerciseInstance?.exerciseId);
if (!exerciseInstance)
{
    console.error("Exercise instance not found for id: ", props.exerciseInstanceId);
}
</script>

<template>
    <div class="div-stacked-horizontal" style="background-color:aquamarine; border-radius: 5px;">
        <label>Exercise: {{ exercise?.name }}</label>        
        <div v-for="setId in exerciseInstance?.setIds" :key="setId">
            <SetComponent :setId="setId"/>
        </div>
    </div>
</template>

<style>
</style>