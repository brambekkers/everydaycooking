<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useApiStore, useMealsStore } from '../store'

const apiStore = useApiStore()
const mealsStore = useMealsStore()
const router = useRouter()
const route = useRoute()
const searchText = ref("")

const emit = defineEmits(['updateMeals'])

async function search() {
    // If user is not on the search page navigate to searchpage and give the correct param
    if (!route.path.includes('meals')) {
        router.push(`./meals/${searchText.value}`)
        return
    }
    const newMeals = await apiStore.searchMeals(searchText.value)
    mealsStore.mergeMaels(newMeals)
    emit('updateMeals', newMeals);
}

onMounted(() => {
    // Check if there is a search param
    // if so, update the search term and make an api call
    const searchtext = route.params.search
    if (!searchtext || typeof searchtext != "string") return;
    searchText.value = searchtext
    search()
})

</script>


<template>
    <div class="searchContainer">
        <i class="search-icon fa-solid fa-magnifying-glass"></i>
        <input v-model="searchText" placeholder="Search meal..." type="text" v-on:keyup.enter="search" />
    </div>
</template>


<style lang="scss" scoped>
.searchContainer {
    border: solid 2px #183153;
    border-radius: 32px;
    position: relative;
    background-color: var(--input-background-color);

    display: flex;
    min-width: 100px;
    height: 64px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 3px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px;
    transition: all 0.2s ease-in;

    .search-icon {
        position: absolute;
        top: 50%;
        left: 1.5rem;
        font-size: 1.3rem;
        translate: 0 -50%;
        color: var(--main-text-color)
    }

    input {
        border: none;
        margin-left: 64px;
        flex-grow: 1;
        background-color: transparent;
        font-size: 1rem;
        font-weight: bold;
        font-family: inherit;
        color: inherit;

        &:focus-visible {
            outline: none;

        }
    }

    &:hover {
        background-color: var(--input-hover-color);
    }
}
</style>

