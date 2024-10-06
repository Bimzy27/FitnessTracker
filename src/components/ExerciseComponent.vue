<script lang="ts" setup>
import type { Exercise } from '@/data/exercise';
import { type PropType } from 'vue';

const props = defineProps({
    exercise: Object as PropType<Exercise>
})

</script>

<template>
    <div class="div-stacked-vertical" style="background-color: cadetblue; border-radius: 5px;">
        <p>Name: {{ props.exercise?.name }}</p>
        <p>Type: {{ props.exercise?.workoutType }}</p>
    </div>
</template>

<style>
</style>