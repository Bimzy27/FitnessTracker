<template>
    <q-card style="min-width: 350px">
        <q-card-section>
            <div class="text-h6">Add Exercise Instance</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <q-select
                dense
                v-model="exercise"
                :options="exerciseOptions"
            ></q-select>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup></q-btn>
            <q-btn flat label="Add" v-close-popup @click="add"></q-btn>
        </q-card-actions>
    </q-card>
</template>

<script setup lang="ts">
import { Exercise } from 'src/data/exercise';
import { ExerciseInstance } from 'src/data/workout';
import workoutService from 'src/services/workoutService';
import { computed, PropType, ref } from 'vue';

const props = defineProps({
    workoutId: Object as PropType<number>,
});

const exercise = ref({
    label: workoutService.exercises.value[0].name,
    value: workoutService.exercises.value[0],
});
const exerciseOptions = computed(() =>
    Object.values(workoutService.exercises.value).map((exercise: Exercise) => ({
        label: exercise.name,
        value: exercise,
    }))
);

function add() {
    let eId: number = -1;
    if (exercise.value) {
        eId = exercise.value.value.id;
    }
    const ei: ExerciseInstance = {
        id: -1,
        exerciseId: eId,
        setIds: [],
    };
    workoutService.addExerciseInstance(props.workoutId!, ei);
}
</script>
