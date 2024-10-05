<script lang="ts" setup>
import workoutService from '@/services/workoutService';
import { type PropType } from 'vue';

const props = defineProps({
    setId: Object as PropType<number>
})

const set = workoutService.sets.value.find((s)=>s.id === props.setId);
if (!set)
{
    console.error("Set not found for id: ", props.setId);
}
</script>

<template>
    <div class="div-stacked-vertical" style="background-color: cornflowerblue; border-radius: 5px;">
        <label>Reps: {{ set?.reps }}</label>        
        <label v-if="set?.weight">Weight: {{ set?.weight }}</label>
    </div>
</template>

<style>
</style>