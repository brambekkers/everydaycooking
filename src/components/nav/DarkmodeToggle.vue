<script setup lang="ts">
import { ref } from 'vue'
const isDarkmode = ref(false)
function setDarkmode(val: boolean) {
    isDarkmode.value = val
    document.documentElement.setAttribute('data-theme', val ? 'dark' : 'light');
}
</script>

<template>
    <div>
        <Transition
enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__zoomOut animate__faster" mode="out-in">
            <i v-if="!isDarkmode" class="darkmode fa-solid fa-sun" @click="setDarkmode(true)" />
            <i v-else class="darkmode fa-solid fa-moon" @click="setDarkmode(false)" />
        </Transition>
    </div>
</template>



<style lang="scss" scoped>
.darkmode {
    font-size: 1.5rem;
    min-width: 30px;
    cursor: pointer;
    color: var(--accent-color);
}
</style>