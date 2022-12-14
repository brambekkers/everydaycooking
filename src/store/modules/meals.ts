import { defineStore } from "pinia";
import { useApiStore } from "./api";
// Types
import { MealStore, Meal } from "../../types/Meals";

export const useMealsStore = defineStore("mealsStore", {
	state: () => {
		return {
			meals: [],
			randomMeals: [],
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
			const newUniqueMeals = newMeals.filter(
				(meal1) => !this.meals.find((meal2) => meal1.idMeal === meal2.idMeal)
			);
			this.meals = [...this.meals, ...newUniqueMeals];
		},
		getMealByID(id: string) {
			return this.meals.find((meal) => meal.idMeal === id);
		},
		async addRandomMeals() {
			this.randomMeals = await useApiStore().getThreeRandomMeals();
		},
		addToFavorite(id: string): string[] {
			// Create an array with unique items
			this.favorites = [...new Set([...this.favorites, id])];
			this.addFavoritesToLocalStorage();
			return this.favorites;
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
			// Check if localFav is avalible in localstorage
			const ls = window.localStorage;
			const localFav = JSON.parse(ls.getItem("favorite_recipes"));
			if (!localFav) return;

			// If avalible update favorites and get meals from api
			this.favorites = localFav;
			for (const fav of this.favorites) {
				const meal = await useApiStore().searchMealByID(fav);
				if (!meal) continue;
				this.meals.push(meal);
			}
		},
	},
});
