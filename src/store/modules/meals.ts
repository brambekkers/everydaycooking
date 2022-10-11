import { defineStore } from "pinia";
import { useApiStore } from "./api";
// Types
import { MealStore, Meal } from "../../types/Meals";

export const useMealsStore = defineStore("mealsStore", {
	state: () => {
		return {
			meals: [],
			favorites: [],
		} as MealStore;
	},
	getters: {
		favoriteMeals(): Meal[] {
			return this.meals.filter((meal) => {
				return this.favorites.find((fav) => fav === meal.idMeal);
			});
		},
	},
	actions: {
		mergeMaels(newMeals: Meal[]) {
			// Check if there are new meals
			// If not update the meals array to empty array
			if (!newMeals) return;

			// Filter the unique meals
			// Add unique meals to all meals array for later use
			const newUniqueMeals = newMeals.filter((meal1) => !this.meals.find((meal2) => meal1.idMeal === meal2.idMeal));
			this.meals = [...this.meals, ...newUniqueMeals];
		},
		getMealByID(id: string) {
			return this.meals.find((meal) => meal.idMeal === id);
		},
		addToFavorite(id: string) {
			// Create an array with unique items
			this.favorites = [...new Set([...this.favorites, id])];
			this.addFavoritesToLocalStorage();
		},
		removeFromFavorite(id: string) {
			const index = this.favorites.findIndex((fav) => fav === id);
			this.favorites.splice(index, 1);
		},
		isFavorite(id: string) {
			return this.favorites.find((fav) => fav === id);
		},
		addFavoritesToLocalStorage() {
			const ls = window.localStorage;
			ls.setItem("favorite_recipes", JSON.stringify(this.favorites));
		},
		async getFavoritesFromLocalStorage() {
			const ls = window.localStorage;
			this.favorites = JSON.parse(ls.getItem("favorite_recipes"));
			for (const fav of this.favorites) {
				const meal = await useApiStore().searchMealByID(fav);
				if (!meal) continue;
				this.meals.push(meal);
			}
		},
	},
});
