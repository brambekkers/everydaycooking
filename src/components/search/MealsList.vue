
<script setup lang="ts">
import Meal from './Meal.vue'
import { useMealsStore } from '../../store'
const mealsStore = useMealsStore()
</script>

<template>
    <div class="mealList">
        <Meal v-for="meal of mealsStore.meals" :meal="meal" />
    </div>
</template>


<style lang="scss" scoped>
.mealList {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 3rem 0;

}
</style>