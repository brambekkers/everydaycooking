<script setup>
import { ref } from 'vue'
const isDarkmode = ref(false)
function setDarkmode(val) {
    isDarkmode.value = val
    if (val) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}
</script>

<template>
    <div>
        <i class="darkmode fa-solid fa-sun" v-if="!isDarkmode" @click="setDarkmode(true)" />
        <i class="darkmode fa-solid fa-moon" v-if="isDarkmode" @click="setDarkmode(false)" />
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