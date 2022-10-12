<script setup lang="ts">
import { useMealsStore } from '@/store'
import MealsList from '@/components/meals/MealsList.vue'

const mealsStore = useMealsStore()
</script>


<template>
    <section id="discover">
        <h2>Discover a new meal</h2>
        <MealsList id="meallist" :meals="mealsStore.randomMeals" />

    </section>
</template>



<style lang="scss" scoped>
#discover {
    width: 100%;
    background-color: var(--secondary-color);
    z-index: 1;
    padding-top: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    flex-grow: 1;

    h2 {
        margin: 0;
        font-size: 2rem;
    }

    #meallist {
        position: relative;
        z-index: 5;
        padding: 1rem;

        gap: 2rem;

        :deep(.meal) {
            height: 400px;
        }
    }
}
</style>