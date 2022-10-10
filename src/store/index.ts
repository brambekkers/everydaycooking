import { createPinia } from "pinia";

const store = createPinia();

// Stores
export * from "./modules/api";
export * from "./modules/meals";

export default store;
