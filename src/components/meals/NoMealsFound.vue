<template>
    <div id="noMeals">
        <i class="fa-regular fa-face-frown-open" />
        <p>Oh no, no meals found... </p>
        <p>Maybe try a different search term</p>
    </div>
</template>

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