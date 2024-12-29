<template>
    <q-item>
        <q-item
            >{{ workout.date.toLocaleString() }} - Exercises:
            {{ workout.exerciseInstanceIds.length }}</q-item
        >
        <q-btn rounded @click="view" color="primary" icon="visibility" />
    </q-item>
</template>

<script lang="ts" setup>
import workoutService from 'src/services/workoutService';
import { type PropType } from 'vue';

const props = defineProps({
    workoutId: Object as PropType<number>,
});

const workout = workoutService.getWorkout(props.workoutId!);

function view() {
    //TODO implement
}
</script>
