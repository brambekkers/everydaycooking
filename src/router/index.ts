import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Start",
		component: () => import("../pages/Index.vue"),
	},
	{
		path: "/search/:search",
		alias: "/search",
		name: "Search",
		component: () => import("../pages/Search.vue"),
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
