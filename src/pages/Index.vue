<script setup>
import Hero from '../components/index/Hero.vue'
import Discover from '../components/index/Discover.vue'
import SearchBar from '../components/SearchBar.vue'

</script>

<template>
    <div id="index">
        <Hero />
        <div class="searchContainer">
            <SearchBar />
        </div>
        <Discover />

        <img class="float chef" src="../assets/svg/Chef.svg" alt="chef">
        <img class="float pot" src="../assets/svg/Pot.svg" alt="cooking pot">
        <img class="float baking" src="../assets/svg/Baking.svg" alt="baking">
    </div>
</template>



<style lang="scss" scoped>
#index {
    position: absolute;
    inset: 5rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 75px);
    overflow: hidden;

    .searchContainer {
        width: 600px;
        margin-bottom: -16px;

        @media (max-width: 600px) {
            width: 95%;
            margin: auto;
        }
    }

    .float {
        position: absolute;
        opacity: 0.3;
        z-index: -1;
    }

    .baking {
        left: 5%;
        top: 30%;
        width: 10vw;
        max-width: 400px;
    }

    .chef {
        right: 5%;
        top: 10%;
        width: 15vw;
        max-width: 500px;
        rotate: -10deg;


    }

    .pot {
        top: 70%;
        width: 20vw;
        max-width: 700px;

        rotate: 20deg;

    }
}
</style>