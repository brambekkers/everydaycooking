<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'
import SearchBar from '../components/SearchBar.vue'
import MealsList from '../components/meals/MealsList.vue'
import NoMealsFound from '../components/meals/NoMealsFound.vue'

import { useMealsStore } from '../store'
const mealsStore = useMealsStore()

onBeforeRouteLeave((to, from) => {
    mealsStore.meals = []
    console.log(mealsStore.meals)
})

</script>

<template>
    <div>
        <SearchBar />
        <MealsList v-if="mealsStore.meals?.length" :meals="mealsStore.meals" />
        <MealsList v-else-if="mealsStore.allMeals?.length" :meals="mealsStore.allMeals" />
        <NoMealsFound v-else />
    </div>
</template>
