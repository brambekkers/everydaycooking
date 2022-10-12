<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import { onMounted } from 'vue'
import { useMealsStore } from './store'

const mealStore = useMealsStore()
const isDarkMode = ref(true)

// When loading the app for the first time, check if there are favorite recipes in local storage
onMounted(() => {
	mealStore.getFavoritesFromLocalStorage()
	mealStore.addRandomMeals();
})
</script>

<template>
	<div id="app" :class="{darkmode : isDarkMode}">
		<NavBar />
		<main>
			<router-view v-slot="{ Component }">
				<transition name="fade" mode="out-in">
					<component :is="Component" />
				</transition>
			</router-view>
		</main>
	</div>
</template>

<style lang="scss">
main {
	max-width: 1400px;
	margin: auto;
	padding: 8rem 2rem 5rem 2rem;
	height: calc(100vh - 9rem);
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
