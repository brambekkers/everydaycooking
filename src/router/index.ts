import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Start",
		component: () => import("../pages/LandingPage.vue"),
	},
	{
		path: "/meals/",
		redirect: "/",
	},
	{
		path: "/meals/:search",
		name: "Search meals",
		component: () => import("../pages/MealSearch.vue"),
	},
	{
		path: "/meal/:mealID",
		alias: "/meal",
		name: "Meal",
		component: () => import("../pages/MealDetails.vue"),
	},
	{
		path: "/meals/favorites",
		name: "Favorites",
		component: () => import("../pages/FavoriteMeals.vue"),
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
