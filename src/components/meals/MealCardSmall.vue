
<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Meal } from '../../types/Meals'

defineProps({
    meal: Object as PropType<Meal>,
});

</script>

<template>
    <div class="meal card">
        <img class="featuredImage" :src="meal.strMealThumb" />
        <div class="cardBody">
            <h2 class="title">{{meal.strMeal}}</h2>
            <hr />
            <div class="instructionContainer">
                <p v-html="meal.strInstructions"></p>

            </div>
            <button class="btn" @click="$router.push(`/meal/${meal.idMeal}`)">View Recipe</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.meal {
    max-height: 600px;


    .instructionContainer {
        padding: 1rem 0;
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