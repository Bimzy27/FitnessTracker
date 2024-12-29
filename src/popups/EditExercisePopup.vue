<template>
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Edit Exercise</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input dense v-model="props.exercise!.name" autofocus></q-input>
      <q-select
        dense
        v-model="props.exercise!.workoutType"
        :options="workoutTypes"
      ></q-select>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat icon="delete" @click="remove" v-close-popup></q-btn>
      <q-btn flat label="Cancel" v-close-popup></q-btn>
      <q-btn flat label="Confirm" v-close-popup></q-btn>
    </q-card-actions>
  </q-card>
  <ErrorPopup
    v-if="errorDeleting"
    v-model="errorDeleting"
    :error-message="'Could not delete exercise. Make sure no workouts contain this exercise.'"
  />
</template>

<script setup lang="ts">
import ErrorPopup from './ErrorPopup.vue';
import { Exercise, WorkoutType } from 'src/data/exercise';
import workoutService from 'src/services/workoutService';
import { PropType, ref } from 'vue';

const props = defineProps({
  exercise: Object as PropType<Exercise>,
});

const workoutTypes: string[] = Object.values(WorkoutType);
const errorDeleting = ref(false);

function remove() {
  errorDeleting.value = !workoutService.removeExercise(props.exercise!.id);
}
</script>
