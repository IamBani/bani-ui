import { createApp } from "vue";
import App from "./App.vue";
import baniui from "bani-ui";
import "bani-ui/dist/index.css";
createApp(App).use(baniui).mount("#app");
console.log(baniui);
