<script setup lang="ts">
import { computed } from "vue";
import { useMealsStore } from '../../../store'
const mealStore = useMealsStore()

const props = defineProps<{
    title: string;
    id: string
}>();

const isFavorite = computed(() => mealStore.isFavorite(props.id))

</script>

<template>
    <div class="card-header">
        <h2 class="title">{{title}}</h2>
        <i class="favorite fa-regular fa-heart" @click="mealStore.addToFavorite(id)" v-if="!isFavorite" />
        <i class="favorite selected fa-solid fa-heart" v-else @click="mealStore.removeFromFavorite(id)" />
    </div>
</template>



<style lang="scss" scoped>

</style>