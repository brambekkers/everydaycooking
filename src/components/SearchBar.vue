<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useApiStore, useMealsStore } from '../store'

const apiStore = useApiStore()
const mealsStore = useMealsStore()
const router = useRouter()
const route = useRoute()
const searchText = ref("")


async function search() {
    // If user is not on the search page navigate to searchpage and give the correct param
    if (!route.path.includes('meals')) {
        router.push(`./meals/${searchText.value}`)
        return
    }
    mealsStore.mergeMaels(await apiStore.searchMeal(searchText.value))


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
    background-color: white;

    display: flex;
    min-width: 100px;
    height: 64px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 3px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 3px -3px;

    .search-icon {
        position: absolute;
        top: 50%;
        left: 1.5rem;
        font-size: 1.3rem;
        translate: 0 -50%;
        color: #183153
    }

    input {
        border: none;
        margin-left: 64px;
        flex-grow: 1;
        background-color: transparent;
        font-size: 1rem;
        font-weight: bold;
        font-family: inherit;

        &:focus-visible {
            outline: none;
        }
    }
}
</style>

