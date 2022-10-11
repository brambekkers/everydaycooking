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
                <button>Everyday Cooking</button>
            </router-link>
            <Menu />
            <DarkmodeToggle />
        </div>
    </nav>
</template>



<style lang="scss" scoped>
#navbar {
    height: 75px;
    max-width: 100vw;
    padding: 0 2rem;
    background-color: var(--background-secondary);

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
            height: 100%;
            margin-right: auto;
            display: flex;
            align-items: center;

            i {
                font-size: 2rem;
                margin-right: 1rem;
            }

            button {
                font-size: 1.3rem;
                border: none;
                background: none;
                cursor: pointer;
                color: var(--accent-color);
                font-weight: 700;
            }

            @media (max-width: 900px) {
                button {
                    display: none;
                }

            }
        }

        .darkmode {
            font-size: 1.5rem;
            min-width: 30px;
        }


    }
}
</style>