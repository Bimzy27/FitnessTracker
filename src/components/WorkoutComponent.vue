<script lang="ts" setup>
import type { Workout } from '@/data/workout';
import { type PropType } from 'vue';

const props = defineProps({
    workout: Object as PropType<Workout>
})

</script>

<template>
    <div class="div-stacked-vertical">
        <p>Date: {{ props.workout?.date.toLocaleDateString() }}</p>
    </div>
</template>

<style>
</style>