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
      <q-btn flat label="Cancel" v-close-popup></q-btn>
      <q-btn flat label="Confirm" v-close-popup></q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { Exercise, WorkoutType } from 'src/data/exercise';
import { PropType } from 'vue';

const props = defineProps({
  exercise: Object as PropType<Exercise>,
});

const workoutTypes: string[] = Object.values(WorkoutType);
</script>
