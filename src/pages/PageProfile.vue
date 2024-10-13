<template>
  <q-page class="flex flex-center">
    Profile<br />
    Total Workouts: {{ totalWorkouts }}
  </q-page>
</template>

<script setup lang="ts">
import workoutService from 'src/services/workoutService';
import { ref } from 'vue';

const totalWorkouts = ref(workoutService.workouts.value.length);
</script>
