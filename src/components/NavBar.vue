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
    height: 75px;
    max-width: 100vw;
    padding: 0 2rem;
    background-color: var(--background-secondary);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .nav-container {
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
    }

    .menu-desktop {
        @media(max-width: 600px) {
            display: none;
        }
    }

    .menu-mobile {
        display: none;

        @media(max-width: 600px) {
            display: flex;
        }
    }
}
</style>