<script setup>
import Menu from '../components/nav/Menu.vue'
import DarkmodeToggle from '../components/nav/DarkmodeToggle.vue'

import { ref } from 'vue'
const darkmode = ref(false)
</script>

<template>
    <nav id="navbar">
        <div class="navContainer">
            <router-link class="logo" to="/">
                <i class="fa-solid fa-utensils" />
            </router-link>

            <Menu />
            <DarkmodeToggle />


            <i class=" fa-solid fa-utensils" />
        </div>
    </nav>
</template>



<style lang="scss" scoped>
#navbar {
    height: 75px;
    max-width: 100vw;
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