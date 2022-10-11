<template>
    <div class="menu">
        <router-link to="/">Start</router-link>
        <router-link to="/meals">Find recipes</router-link>
        <router-link to="/favorites">Favorites</router-link>
    </div>
</template>



<style lang="scss" scoped>
.menu {
    display: flex;
    gap: 1.5rem;
    margin: 0 3rem;


    @media (max-width: 600px) {
        display: none !important;
    }
}
</style>