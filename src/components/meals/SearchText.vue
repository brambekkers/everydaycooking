<template>
    <div id="noMeals">
        <i class="fa-solid fa-magnifying-glass" />
        <p>Type the name of your dish in the search bar.</p>
        <p>You can also enter an ingredient!</p>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
#noMeals {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
        font-size: 10vw;
        margin-bottom: 2rem;
    }

    p {
        margin: 0;
    }
}
</style>