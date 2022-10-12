<script setup lang="ts">
import NavMenu from '@/components/nav/NavMenu.vue'
import DarkmodeToggle from '@/components/nav/DarkmodeToggle.vue'
</script>

<template>
    <nav id="navbar">
        <div class="nav-container">
            <router-link class="logo" to="/">
                <i class="fa-solid fa-utensils" />
                <button>Everyday Cooking</button>
            </router-link>
            <NavMenu class="menu-desktop" />
            <DarkmodeToggle />
        </div>
        <NavMenu class="menu-mobile" />
    </nav>
</template>

<style lang="scss" scoped>
#navbar {
    position: relative;
    box-sizing: border-box;

    z-index: 10;
    max-width: 100vw;
    width: 100vw;
    padding: 0 2rem;
    background-color: var(--background-secondary);

    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: rgb(50 50 93 / 10%) 0px 6px 12px -2px, rgb(0 0 0 / 4%) 0px 3px 7px -3px;

    .nav-container {
        height: 100%;
        width: 100%;
        max-width: 1400px;
        height: 75px;


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
    }

    .menu-desktop {
        @media(max-width: 600px) {
            display: none;
        }
    }

    .menu-mobile {
        display: none;
        height: 50px;


        @media(max-width: 600px) {
            display: flex;
        }
    }
}
</style>