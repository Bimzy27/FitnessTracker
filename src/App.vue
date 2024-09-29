<script setup>
import { ref } from 'vue'
import HeaderContainer from './components/HeaderContainer.vue'

const name = ref('Branden')
</script>

<template>
  <HeaderContainer/>
  <div>
    <label>Name: {{name}}</label>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>