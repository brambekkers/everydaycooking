
<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { Meal } from '../../types/Meals'

defineProps({
    meal: Object as PropType<Meal>,
});

</script>

<template>
    <div class="meal card">
        {{meal}}
    </div>
</template>


<style lang="scss" scoped>
.meal {
    min-height: 100px;
}
</style>