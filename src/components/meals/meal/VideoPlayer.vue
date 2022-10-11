<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ src: String; }>();
const embedSrc = computed(() => props.src.replace('watch?v=', 'embed/'))

</script>

<template>
    <div class="card">
        <iframe class="video" :src="embedSrc" />
    </div>
</template>

<style lang="scss" scoped>
.video {
    aspect-ratio: 16/ 9;
}
</style>