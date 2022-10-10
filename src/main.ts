import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
