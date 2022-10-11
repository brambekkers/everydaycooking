import { defineStore } from "pinia";

// Types
import { MealStore, Meal } from "../../types/Meals";

export const useMealsStore = defineStore("mealsStore", {
	state: () => {
		return {
			meals: [],
			allMeals: [],
		} as MealStore;
	},
	actions: {
		mergeMaels(newMeals: Meal[]) {
			// Check if there are new meals
			// If not update the meals array to empty array
			if (!newMeals) return (this.meals = []);

			// Filter the unique meals
			// Add unique meals to allmeals array for later use
			const newUniqueMeals = newMeals.filter((meal1) => !this.meals.find((meal2) => meal1.idMeal === meal2.idMeal));
			this.allMeals = [...this.allMeals, ...newUniqueMeals];

			// Update the meals array with only the new meals
			this.meals = newMeals;
		},
	},
});
