<template>
	<div class="no-favorites">
		<i class="fa-solid fa-triangle-exclamation"></i>
		<p>There are no favorite meals.</p>
		<p>Add your favorite meal by clicking on the heart icon!</p>
	</div>
</template>

<style scoped lang="scss">
.no-favorites {
	height: 50vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	i {
		font-size: 10vw;
		margin-bottom: 2rem;
	}

	p {
		text-align: center;
		max-width: 500px;
		margin: 0;
	}
}
</style>
