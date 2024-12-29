<template>
  <q-dialog v-model="showError" persistent>
    <q-card>
      <q-card-title class="text-red">Error</q-card-title><br />
      <q-card-content>
        {{ props.errorMessage }}
      </q-card-content>
      <q-card-actions align="right">
        <q-btn
          color="primary"
          label="OK"
          @click="showError = false"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';

const props = defineProps({
  errorMessage: Object as PropType<string>,
});

const showError = ref(false);
</script>
