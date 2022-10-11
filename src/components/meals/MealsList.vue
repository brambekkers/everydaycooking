
<script setup lang="ts">
import MealItem from './meal/MealCardSmall.vue'
import { Meal } from '../../types/Meals'

defineProps<{ meals: Meal[]; }>();
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
    justify-content: center;
    margin: 3rem 0;
    gap: 3rem;
    padding-bottom: 2rem;

    .meal {
        aspect-ratio: 4/6;
        height: 580px;





        &:last-child {}
    }

    @media (max-width: 900px) {
        gap: 2rem;

        .meal {
            height: 460px;
        }
    }

    @media (max-width: 600px) {
        gap: 1rem;

        .meal {
            width: 100%;
            height: unset;
        }

    }


}
</style>