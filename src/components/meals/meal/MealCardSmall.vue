
<script setup lang="ts">
import { Meal } from '@/types/Meals'
import CardHeader from '@/components/meals/meal/MealCardHeader.vue'
import MealInstructions from '@/components/meals/meal/MealInstructions.vue'

defineProps<{ meal: Meal; }>();

</script>

<template>
    <div class="meal card">
        <img class="featuredImage" :src="meal.strMealThumb" />
        <CardHeader :id="meal.idMeal" :title="meal.strMeal" />
        <div class="card-body">
            <hr />
            <div class="instructionContainer">
                <MealInstructions :instructions="meal.strInstructions" />
            </div>
            <button class="btn" @click="$router.push(`/meal/${meal.idMeal}`)">View Recipe</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.meal {
    max-height: 600px;


    .instructionContainer {
        padding: 0.4rem 0;
        flex-grow: 1;
        display: flex;
        align-items: center;
    }

    p {
        text-align: center;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        font-size: 0.85rem;

    }

    .btn {
        width: 75%;
        margin: auto;
        margin-bottom: 0.6rem;

    }
}
</style>