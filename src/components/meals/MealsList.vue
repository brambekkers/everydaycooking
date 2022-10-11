
<script setup lang="ts">
import { defineProps, PropType } from "vue";

import MealItem from './Meal.vue'
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
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 3rem 0;
    gap: 2rem;

    .meal {
        width: 31%;
        aspect-ratio: 4/5;
    }
}
</style>