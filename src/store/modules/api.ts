import { defineStore } from "pinia";

// Types
import { Meal } from "../../types/Meals";

export const useApiStore = defineStore("apiStore", {
	state: () => {
		return {
			isSearching: false,
			baseUrl: "https://www.themealdb.com/api/json/v1/1/",
		};
	},
	actions: {
		async searchMeals(meal: string): Promise<Meal[]> {
			try {
				this.isSearching = true;
				const result = await fetch(`${this.baseUrl}search.php?s=${meal}`);
				const { meals } = await result.json();
				return meals;
			} catch (error) {
				throw error;
			} finally {
				this.isSearching = false;
			}
		},
		async searchMealByID(id: string): Promise<Meal | null> {
			try {
				this.isSearching = true;
				const result = await fetch(`${this.baseUrl}lookup.php?i=${id}`);
				const { meals } = await result.json();
				if (!meals?.[0]) return null;
				return meals[0];
			} catch (error) {
				throw error;
			} finally {
				this.isSearching = false;
			}
		},
	},
});
