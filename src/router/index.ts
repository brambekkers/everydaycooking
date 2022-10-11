import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Start",
		component: () => import("../pages/Index.vue"),
	},
	{
		path: "/meals/:search",
		alias: "/meals",
		name: "Search meals",
		component: () => import("../pages/Meals.vue"),
	},
	{
		path: "/meal/:mealID",
		alias: "/meals",
		name: "Meal",
		component: () => import("../pages/Meal.vue"),
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
