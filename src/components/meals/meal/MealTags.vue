

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ tags: string; }>();

const tagsArray = computed(() => props.tags.split(","))
</script>

<template>
    <div class="tags">
        <div v-for="tag of tagsArray" :key="tag" class="tag">
            {{tag}}
        </div>
        {{}}
    </div>
</template>

<style scoped lang="scss">
.tags {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;

    .tag {
        height: 32px;
        border-radius: 16px;
        padding: 0 12px;
        background-color: rgba($color: #ffb703, $alpha: 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 700;
        color: --main-text-color;
    }
}
</style>