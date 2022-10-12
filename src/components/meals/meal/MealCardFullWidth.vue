
<script setup lang="ts">
import { Meal } from '@/types/Meals'
import CardHeader from '@/components/meals/meal/MealCardHeader.vue'
import MealInstructions from '@/components/meals/meal/MealInstructions.vue'
import MealTags from '@/components/meals/meal/MealTags.vue'
import VideoPlayer from '@/components/meals/meal/VideoPlayer.vue'

defineProps<{ meal: Meal; }>();

</script>

<template>
    <div v-if="meal" class="card">
        <img class="featured-image" :src="meal.strMealThumb" />
        <CardHeader :id="meal.idMeal" :title="meal.strMeal" />
        <div class="card-body">
            <hr />
            <h3 class="subtitle">Ingredients
                <MealTags v-if="meal.strTags" :tags="meal.strTags" />
            </h3>
            <ul class="ingredient-list">
                <template v-for="item in 20">
                    <li v-if="meal[`strIngredient${item+1}`]" :key="item">
                        {{meal[`strIngredient${item+1}`]}}
                        -
                        {{meal[`strMeasure${item+1}`]}}
                    </li>
                </template>
            </ul>
            <h3 class="subtitle">Let's make this meal

            </h3>
            <MealInstructions :instructions="meal.strInstructions" />
            <VideoPlayer :src="meal.strYoutube" />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.subtitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.featured-image {
    max-height: 300px;
}

.ingredient-list {
    margin: 0;
}
</style>