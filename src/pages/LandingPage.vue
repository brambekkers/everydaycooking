<script setup lang="ts">
import HeroSection from '@/components/landingPage/HeroSection.vue'
import DiscoverSection from '@/components/landingPage/DiscoverSection.vue'

</script>

<template>
    <div id="landing">
        <HeroSection />
        <DiscoverSection />
        <img class="floating-image chef" src="../assets/svg/Chef.svg" alt="chef">
        <img class="floating-image pot" src="../assets/svg/Pot.svg" alt="cooking pot">
        <img class="floating-image baking" src="../assets/svg/Baking.svg" alt="baking">
    </div>
</template>



<style lang="scss" scoped>
#landing {
    position: absolute;
    inset: 0;
    top: 5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: calc(100vh - 75px);



    .baking {
        left: 5%;
        top: 10%;
        width: 10vw;
        max-width: 400px;
    }

    .chef {
        right: 5%;
        top: 10%;
        width: 15vw;
        max-width: 500px;
        rotate: -10deg;
    }

    .pot {
        top: 70%;
        left: -5%;
        width: 20vw;
        max-width: 700px;
        rotate: 20deg;
    }
}
</style>