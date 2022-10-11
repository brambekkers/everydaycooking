<script setup>
import { useMealsStore } from '../../store'

const mealsStore = useMealsStore()
import MealsList from '../meals/MealsList.vue'

</script>


<template>
    <div id="discover">
        <h2>Discover a new meal</h2>
        <MealsList id="meallist" :meals="mealsStore.randomMeals" />

    </div>
</template>



<style lang="scss" scoped>
#discover {
    width: 100%;
    height: 600px;
    background-color: var(--secondary-color);
    z-index: 1;
    padding-top: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin: 0;
        font-size: 2rem;
    }

    #meallist {
        position: relative;
        z-index: 2;

        :deep(.meal) {
            height: 400px;
        }
    }
}
</style>