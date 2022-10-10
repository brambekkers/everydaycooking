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
		async searchMeal(meal: string): Promise<Meal[]> {
			try {
				this.isSearching = true;
				const result = await fetch(`${this.baseUrl}search.php?s=${meal}`);
				const data = await result.json();
				return data.meals;
			} catch (error) {
				throw error;
			} finally {
				this.isSearching = false;
			}
		},
	},
});
