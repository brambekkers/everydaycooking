<script setup>
import { ref } from 'vue'
const darkmode = ref(false)
</script>

<template>
    <nav id="navbar">
        <div class="navContainer">
            <router-link class="logo" to="/">
                <i class="fa-solid fa-utensils" />
            </router-link>

            <div class="menu">
                <router-link to="/">Start</router-link>
                <router-link to="/search">Find recipes</router-link>
                <router-link to="/favorites">Favorites</router-link>
            </div>

            <!-- Darkmode toggle -->
            <i class="darkmode fa-solid fa-sun" v-if="!darkmode" @click="darkmode = !darkmode" />
            <i class="darkmode fa-solid fa-moon" v-if="darkmode" @click="darkmode = !darkmode" />


            <i class=" fa-solid fa-utensils" />
        </div>
    </nav>
</template>



<style lang="scss" scoped>
#navbar {
    height: 75px;
    padding: 0 2rem;

    display: flex;
    justify-content: center;

    .navContainer {
        height: 100%;
        width: 100%;
        max-width: 1400px;

        display: flex;
        align-items: center;
        gap: 1rem;

        .menu {
            display: flex;
            gap: 1.5rem;
            margin: 0 3rem;
        }

        i {
            cursor: pointer;
        }

        .logo {

            margin-right: auto;

            i {
                font-size: 2rem;
            }
        }

        .darkmode {
            font-size: 1.5rem;
            min-width: 30px;
        }


    }
}
</style>