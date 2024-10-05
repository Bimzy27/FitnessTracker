<script setup>
import HeaderContainer from './components/HeaderContainer.vue'
import Profile from './views/Profile.vue'
import Exercises from './views/Exercises.vue'
import Workouts from './views/Workouts.vue'
import { useActiveViewStore } from '@/stores/activeView';

const store = useActiveViewStore();
</script>

<template>
  <HeaderContainer/>
  <Profile v-if="store.activeView === 'profile'"/>
  <Exercises v-if="store.activeView === 'exercises'"/>
  <Workouts v-if="store.activeView === 'workouts'"/>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>