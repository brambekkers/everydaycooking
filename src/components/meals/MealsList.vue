
<script setup lang="ts">
import { defineProps, PropType } from "vue";

import MealItem from './MealCardSmall.vue'
import { Meal } from '../../types/Meals'

defineProps({
    meals: Array as PropType<Meal[]>,
});
</script>

<template>
    <div class="mealList">
        <MealItem v-for="meal of meals" :meal="meal" class="meal" />
    </div>
</template>


<style lang="scss" scoped>
.mealList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 3rem 0;

    padding-bottom: 2rem;

    .meal {
        width: 31%;
        aspect-ratio: 4/5;

        margin: 1rem;

        &:last-child {
            margin-right: auto;
        }
    }


}
</style>