<template>
    <div class="hero">
        <h2>Take the hassle out of</h2>
        <h2>your daily <span class="accentColor">dinner</span>!</h2>


        <div class="subtitle">
            <span class="fw-semibold"> Everyday Cooking</span>
            is your ideal helper in the
            kitchen.
            Cooking has never been so easy.
            Every day is a party with <span class="fw-semibold"> Everyday Cooking</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    max-width: 600px;
    min-height: 300px;
    padding-top: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        width: 100%;
        font-size: 3rem;
        line-height: 3rem;
        text-align: center;
        margin: 0;

        text-shadow: 0px 3px 12px rgba(50, 50, 93, 0.25);

        a {
            min-width: 100px;


        }
    }

    .subtitle {
        text-align: center;
        margin-top: 2rem;

    }



}
</style>