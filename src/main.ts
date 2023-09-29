import { createApp } from "vue";
import { createPinia } from "pinia";
import globalComponents from "@/components/global-components";
import "@/assets/scss/global.scss";

import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(VueApexCharts);
app.use(globalComponents);
app.use(createPinia());
app.use(router);

app.mount("#app");
