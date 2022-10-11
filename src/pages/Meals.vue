<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import MealsList from '../components/meals/MealsList.vue'
import NoMealsFound from '../components/meals/NoMealsFound.vue'

import { useMealsStore } from '../store'
const mealsStore = useMealsStore()
const hasSearch = ref(false)
const latestMeals = ref([])

function updateLatestMeals(meals) {
    latestMeals.value = meals
    hasSearch.value = true
}
</script>

<template>
    <div>
        <SearchBar @updateMeals="updateLatestMeals" />
        <!-- Only if there is a current search for a meal -->
        <MealsList v-if="latestMeals?.length" :meals="latestMeals" />
        <!-- Show all avalible meals in state -->
        <MealsList v-else-if="mealsStore.meals?.length" :meals="mealsStore.meals" />
        <!-- If no meals are avalible show message -->
        <NoMealsFound v-else />
    </div>
</template>
