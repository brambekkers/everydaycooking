<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
    <section class="hero">
        <h2>Take the hassle out of</h2>
        <h2>your daily <span class="accentColor">dinner</span>!</h2>


        <div class="subtitle">
            <span class="fw-semibold"> Everyday Cooking</span>
            is your ideal helper in the
            kitchen.
            Cooking has never been so easy.
            Each day is a party with <span class="fw-semibold"> Everyday Cooking.</span>
        </div>

        <div class="search-container">
            <SearchBar />
        </div>

    </section>
</template>

<style lang="scss" scoped>
.hero {
    max-width: 600px;
    min-height: 300px;
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 600px) {
        padding-top: 100px;
        width: 95%;
        margin: auto;

        h2 {
            font-size: 2rem !important;
            line-height: 2rem !important;
        }

        .subtitle {
            max-width: 80%;
        }
    }

    h2 {
        width: 100%;
        font-size: 3rem;
        line-height: 3rem;
        text-align: center;
        margin: 0;

        text-shadow: 0px 3px 12px rgba(50, 50, 93, 0.25);

        a {
            min-width: 100px;
        }
    }

    .subtitle {
        text-align: center;
        margin-top: 2rem;
        margin-left: auto;
        margin-right: auto;

    }

    .search-container {
        width: 600px;
        margin-top: 2rem;
        margin-bottom: -32px;

        @media (max-width: 600px) {
            width: 95%;
            margin: auto;
        }
    }



}
</style>