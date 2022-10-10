import { defineStore } from "pinia";

// Types
import { MealStore } from "../../types/Meals";

export const useMealsStore = defineStore("mealsStore", {
	state: () => {
		return {
			meals: [],
		} as MealStore;
	},
	actions: {},
});
