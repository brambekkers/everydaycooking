<template>
    <div class="menu">
        <router-link to="/meals" class="menu-item">
            <i class="fa-solid fa-magnifying-glass" />
            Find recipes
        </router-link>
        <router-link to="/meals/favorites" class="menu-item">
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
    margin: 0 1rem;

    .menu-item {
        display: flex;
        align-items: center;

        i {
            margin-right: 0.5rem;
        }
    }
}
</style>