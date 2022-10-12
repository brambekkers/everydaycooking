<script setup lang="ts">
import DOMPurify from 'dompurify';
import { computed } from 'vue'

const props = defineProps<{ instructions: string; }>();
const cleanInstructions = computed(() => DOMPurify.sanitize(props.instructions));
</script>

<template>
    <!-- eslint-disable-line no-use-before-define -->
    <p v-html="cleanInstructions" />
</template>

<style lang="scss">
p {
    margin: 0 0 1rem 0;
}
</style>