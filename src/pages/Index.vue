<template>
    <div id="index">
        <Hero />
        <div class="searchContainer">
            <SearchBar />
        </div>
        <Discover />
    </div>
</template>

<script setup>
import Hero from '../components/index/Hero.vue'
import Discover from '../components/index/Discover.vue'
import SearchBar from '../components/SearchBar.vue'

</script>

<style lang="scss" scoped>
#index {
    position: absolute;
    inset: 5rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    .searchContainer {
        width: 600px;
        margin-bottom: -16px
    }
}
</style>