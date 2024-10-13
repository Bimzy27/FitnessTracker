<template>
    <q-item>
        <q-item>Exercise: {{ exercise?.name }}</q-item>
        <q-btn rounded @click="removeSet()" color="primary" icon="remove"/>
        <q-list :separator="true">
            <q-item v-for="setId in exerciseInstance?.setIds" :key="setId">
            <SetComponent :setId="setId"/>
        </q-item>
        </q-list>
        <q-btn rounded @click="addSet()" color="primary" icon="add"/>
    </q-item>
</template>

<script lang="ts" setup>
import SetComponent from './SetComponent.vue';
import workoutService from 'src/services/workoutService';
import { type PropType } from 'vue';

const props = defineProps({
    exerciseInstanceId: Object as PropType<number>
})

const exerciseInstance = workoutService.getExerciseInstance(props.exerciseInstanceId!);
const exercise = workoutService.getExercise(exerciseInstance?.exerciseId);
if (!exerciseInstance)
{
    console.error('Exercise instance not found for id: ', props.exerciseInstanceId);
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