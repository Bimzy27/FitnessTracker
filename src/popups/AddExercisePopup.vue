<template>
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">Add Exercise</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <q-input dense v-model="exercise.name" autofocus></q-input>
      <q-select
        dense
        v-model="exercise.workoutType"
        :options="workoutTypes"
      ></q-select>
    </q-card-section>

    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancel" v-close-popup></q-btn>
      <q-btn flat label="Add" v-close-popup @click="add"></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { Exercise, WorkoutType } from 'src/data/exercise';
import workoutService from 'src/services/workoutService';

const exercise: Exercise = {
  id: -1,
  name: '',
  workoutType: WorkoutType.WEIGHT_BEARING,
};
const workoutTypes: string[] = Object.values(WorkoutType);

function add() {
  workoutService.addExercise(exercise);
}
</script>
