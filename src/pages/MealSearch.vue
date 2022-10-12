<script setup lang="ts">
import { Meal } from "../types/Meals";

import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import MealsList from '../components/meals/MealsList.vue'
import NoMealsFound from '../components/meals/NoMealsFound.vue'
import SearchText from '../components/meals/SearchText.vue'

const hasSearch = ref(false)
const latestMeals = ref([])

function updateLatestMeals(meals: Meal[]): void {
    latestMeals.value = meals
    hasSearch.value = true
}
</script>

<template>
    <div>
        <SearchBar @update-meals="updateLatestMeals" />
        <SearchText v-if="!hasSearch" />
        <!-- Only if there is a current search for a meal -->
        <MealsList v-else-if="latestMeals?.length" :meals="latestMeals" />

        <!-- If no meals are avalible show message -->
        <NoMealsFound v-else />

        <img class="floating-image fried" src="../assets/svg/Fried.svg" alt="fried">
        <img class="floating-image mitten" src="../assets/svg/Mitten.svg" alt="mitten">
    </div>
</template>


<style lang="scss" scoped>
.fried {
    left: 5%;
    bottom: 20%;
    width: 25vw;
    max-width: 400px;
}

.mitten {
    right: 5%;
    top: 30%;
    width: 15vw;
    max-width: 500px;
    rotate: -10deg;
}
</style>