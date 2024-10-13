<script lang="ts" setup>
import workoutService from '@/services/workoutService';
import type { Set } from '@/data/workout';
import { ref, type PropType } from 'vue';

const props = defineProps({
    setId: Object as PropType<number>
})

const set = ref<Set | undefined>(workoutService.sets.value.find((s) => s.id === props.setId));

</script>

<template>
    <div class="div-stacked-vertical" style="background-color: cornflowerblue; border-radius: 5px;">
        <div class="div-stacked-horizontal">
            <label>Reps: 
                <input type="number" v-model.number="set!.reps" style="width: 60px;">
            </label>
        </div>
        <label v-if="set?.weight">Weight: 
            <input type="number" v-model.number="set!.weight" style="width: 60px;">
        </label>
    </div>
</template>

<style>
</style>