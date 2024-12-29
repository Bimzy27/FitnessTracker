<template>
  <q-page>
    <div class="row">Exercises</div>
    <div class="row">
      <q-list
        :separator="true"
        :bordered="true"
        v-for="exercise in exercises"
        :key="exercise.id"
      >
        <q-item>
          {{ exercise.name }}<br />
          {{ exercise.workoutType }}
          <q-btn
            rounded
            color="primary"
            icon="edit"
            size="xs"
            @click="editExercise(exercise)"
          />
        </q-item>
      </q-list>
    </div>
    <div class="row">
      <q-btn
        rounded
        color="primary"
        icon="add"
        size="md"
        @click="addingExercise = true"
      />
    </div>
    <q-dialog v-model="edittingExercise" persistent>
      <EditExercisePopup :exercise="selectedExercise" />
    </q-dialog>
    <q-dialog v-model="addingExercise" persistent>
      <AddExercisePopup />
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import EditExercisePopup from 'src/popups/EditExercisePopup.vue';
import { Exercise, WorkoutType } from 'src/data/exercise';
import workoutService from 'src/services/workoutService';
import { ref } from 'vue';
import AddExercisePopup from 'src/popups/AddExercisePopup.vue';

const exercises = workoutService.exercises;
const edittingExercise = ref(false);
const addingExercise = ref(false);

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
