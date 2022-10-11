<script setup>
import { ref } from 'vue'
const darkmode = ref(false)
</script>

<template>
    <div>
        <i class="darkmode fa-solid fa-sun" v-if="!darkmode" @click="darkmode = !darkmode" />
        <i class="darkmode fa-solid fa-moon" v-if="darkmode" @click="darkmode = !darkmode" />
    </div>
</template>



<style lang="scss" scoped>
.darkmode {
    font-size: 1.5rem;
    min-width: 30px;

    i {
        cursor: pointer;
    }
}
</style>