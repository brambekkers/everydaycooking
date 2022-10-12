
<script setup lang="ts">
import MealItem from '@/components/meals/meal/MealCardSmall.vue'
import { Meal } from '@/types/meals'
import { useApiStore } from '@/store'

defineProps<{ meals: Meal[]; }>();
const apiStore = useApiStore()


</script>

<template>
    <Transition
enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut" mode="out-in">
        <div v-if="!apiStore.isSearching" class="mealList">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" class="meal" />
        </div>
        <div v-else class="loading">
            Loading</div>
    </Transition>

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

.loading {
    width: 100%;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;


}
</style>