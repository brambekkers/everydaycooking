<script setup lang="ts">
import MealCardFullWidth from '../components/meals/meal/MealCardFullWidth.vue'

import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useMealsStore, useApiStore } from '../store'

const mealStore = useMealsStore()
const apiStore = useApiStore()
const meal = ref(null)

onMounted(async () => {
    // Check if there is a meal ID available
    const mealID = useRoute().params.mealID
    if (!mealID) useRouter.push('/meals')

    // Find meal localy
    const localMeal = mealStore.getMealByID(mealID)
    if (localMeal) return meal.value = localMeal

    // If no local meal avalible make an api call
    const apiMeal = await apiStore.searchMealByID(mealID)
    if (apiMeal) return meal.value = apiMeal
})
</script>

<template>
    <MealCardFullWidth :meal="meal" />
</template>



<style lang="scss" scoped>

</style>