import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./language/i18n";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/index.css";
const app = createApp(App);
app.AOS = new AOS.init({ once: true });
app.use(createPinia());
app.use(router);
app.use(i18n);
app.mount("#app");
