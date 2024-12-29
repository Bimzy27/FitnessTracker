<template>
    <q-dialog v-model="showConfirmation" persistent>
        <q-card>
            <q-card-section class="row items-center">
                <span class="q-ml-sm">{{ props.confirmationMessage }}</span>
            </q-card-section>

            <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn
                    flat
                    label="Confirm"
                    color="primary"
                    @click="confirm"
                    v-close-popup
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue';

const props = defineProps({
    confirmationMessage: Object as PropType<string>,
    confirmAction: Object as PropType<() => void>,
});

function confirm() {
    props.confirmAction!();
}

const showConfirmation = ref(false);
</script>
