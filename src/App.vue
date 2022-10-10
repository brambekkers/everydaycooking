<script setup lang="ts">
import Nav from './components/Nav.vue'


</script>

<template>
	<Nav />

	<main>
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" />
			</transition>
		</router-view>
	</main>
</template>

<style scoped>
main {
	max-width: 1400px;
	margin: auto;
	padding: 2rem 2rem;
	height: calc(100vh - 9rem);
}
</style>
