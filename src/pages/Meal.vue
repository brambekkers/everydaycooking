<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useMealsStore, useApiStore } from '../store'

const mealStore = useMealsStore()
const apiStore = useApiStore()
const meal = ref(null)

onMounted(async () => {
    // Check if there is a meal ID avalible
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
    <div class="card" v-if="meal">
        <img class="featuredImage" :src="meal.strMealThumb" />
        <div class="cardBody">
            <h2 class="title">{{meal.strMeal}}</h2>
            <hr />
            <div class="instructionContainer">

            </div>

            <h3 class="subtitle">Ingredients</h3>
            <ul>
                <template v-for="item in 20">
                    <li :key="item" v-if="meal[`strIngredient${item+1}`]">
                        {{meal[`strIngredient${item+1}`]}}
                        -
                        {{meal[`strMeasure${item+1}`]}}
                    </li>
                </template>
            </ul>
            <p v-html="meal.strInstructions"></p>

        </div>
    </div>
</template>



<style lang="scss" scoped>
.featuredImage {
    max-height: 300px;
}
</style>