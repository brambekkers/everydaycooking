
<script setup lang="ts">
import MealsList from '../components/meals/MealsList.vue'
import { useMealsStore } from '../store'
const mealsStore = useMealsStore()
</script>

<template>
    <div>
        <h2>My Favorite Recipes</h2>
        <MealsList :meals="mealsStore.favoriteMeals" />
        <img class="floating-image pot" src="../assets/svg/Pot.svg" alt="cooking pot">
    </div>
</template>

<style lang="scss" scoped>
h2 {
    margin: 0;
}

.pot {
    right: -5%;
    bottom: -10%;
    width: 30vw;
    rotate: 20deg;
}
</style>