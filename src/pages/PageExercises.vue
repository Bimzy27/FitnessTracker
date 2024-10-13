<template>
  <q-page>
    <div class="row">Exercises</div>
    <div class="row">
      <q-list
        :padding="true"
        :separator="true"
        v-for="exercise in exercises"
        :key="exercise.id"
      >
        <div class="column">
          {{ exercise.name }}<br />
          {{ exercise.workoutType }}
          <q-btn
            rounded
            color="primary"
            icon="edit"
            size="xs"
            @click="editExercise(exercise)"
          />
        </div>
      </q-list>
    </div>
    <q-dialog v-model="edittingExercise" persistent>
      <EditExercisePopup :exercise="selectedExercise" />
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import EditExercisePopup from 'src/popups/EditExercisePopup.vue';
import { Exercise, WorkoutType } from 'src/data/exercise';
import workoutService from 'src/services/workoutService';
import { ref } from 'vue';

const exercises = workoutService.exercises;
const edittingExercise = ref(false);
const selectedExercise = ref({
  id: -1,
  name: 'None',
  workoutType: WorkoutType.WEIGHT_BEARING,
});

function editExercise(exercise: Exercise) {
  selectedExercise.value = exercise;
  edittingExercise.value = true;
}
</script>
