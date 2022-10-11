import { defineStore } from "pinia";

// Types
import { MealStore, Meal } from "../../types/Meals";

export const useMealsStore = defineStore("mealsStore", {
	state: () => {
		return {
			meals: [],
		} as MealStore;
	},
	actions: {
		mergeMaels(newMeals: Meal[]) {
			// Check if there are new meals
			// If not update the meals array to empty array
			if (!newMeals) return;

			// Filter the unique meals
			// Add unique meals to allmeals array for later use
			const newUniqueMeals = newMeals.filter((meal1) => !this.meals.find((meal2) => meal1.idMeal === meal2.idMeal));
			this.meals = [...this.meals, ...newUniqueMeals];
		},
		getMealByID(id: string) {
			return this.meals.find((meal) => meal.idMeal === id);
		},
	},
});
