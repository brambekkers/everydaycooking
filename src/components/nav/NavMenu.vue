<template>
    <div class="menu">
        <router-link to="/meals">
            <i class="fa-solid fa-magnifying-glass" />
            Find recipes
        </router-link>
        <router-link to="/meals/favorites">
            <i class="fa-regular fa-star" />
            Favorites
        </router-link>
    </div>
</template>



<style lang="scss" scoped>
.menu {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin: 0 3rem;
}
</style>