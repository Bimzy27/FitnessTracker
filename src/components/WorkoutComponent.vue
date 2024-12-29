<template>
    <q-item>
        <q-item-section>
            {{ props.workout!.date.getDate() }}/{{
                props.workout!.date.getMonth()
            }}/{{ props.workout!.date.getFullYear() }}

            <q-list :bordered="true" :separator="true">
                <q-item
                    v-for="eiId in props.workout!.exerciseInstanceIds"
                    :key="eiId"
                >
                    <ExerciseInstanceComponent
                        :workoutId="props.workout?.id"
                        :exerciseInstanceId="eiId"
                    />
                </q-item>
            </q-list>
        </q-item-section>
        <q-btn
            rounded
            @click="addExerciseInstance()"
            color="primary"
            icon="add"
            label="Exercise"
        />
        <q-dialog v-model="addingExercise" persistent>
            <AddExerciseInstancePopup :workoutId="props.workout?.id" />
        </q-dialog>
    </q-item>
</template>

<script lang="ts" setup>
import AddExerciseInstancePopup from 'src/popups/AddExerciseInstancePopup.vue';
import ExerciseInstanceComponent from './ExerciseInstanceComponent.vue';
import { ref, type PropType } from 'vue';
import { Workout } from 'src/data/workout';

const props = defineProps({
    workout: Object as PropType<Workout>,
});

const addingExercise = ref(false);

function addExerciseInstance() {
    addingExercise.value = true;
}
</script>
