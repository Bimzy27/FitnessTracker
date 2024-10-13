<template>
    <q-div>
        <q-div>
            <q-label>Reps: 
                <input type="number" v-model.number="set!.reps">
            </q-label>
        </q-div>
        <q-label v-if="set?.weight">Weight: 
            <input type="number" v-model.number="set!.weight">
        </q-label>
    </q-div>
</template>

<script lang="ts" setup>
import workoutService from 'src/services/workoutService';
import type { Set } from 'src/data/workout';
import { ref, type PropType } from 'vue';

const props = defineProps({
    setId: Object as PropType<number>
})

const set = ref<Set | undefined>(workoutService.sets.value.find((s) => s.id === props.setId));

</script>