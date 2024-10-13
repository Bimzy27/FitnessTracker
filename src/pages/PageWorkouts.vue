<template>
  <q-page class="flex flex-center">
    Workouts

    <q-list :separator="true">
      <q-item v-for="workout in workouts" :key="workout.id">
        <q-item-section>
          {{ workout.date.getDate() }}/{{ workout.date.getMonth() }}/{{
            workout.date.getFullYear()
          }}

          <q-list :bordered="true" :separator="true">
            <q-item v-for="eiId in workout.exerciseInstanceIds" :key="eiId">
              <ExerciseInstanceComponent :exerciseInstanceId="eiId" />
            </q-item>
          </q-list>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import ExerciseInstanceComponent from 'src/components/ExerciseInstanceComponent.vue';
import workoutService from 'src/services/workoutService';

const workouts = workoutService.workouts;
</script>
