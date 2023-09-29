import "primevue/resources/themes/md-dark-indigo/theme.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from "primevue/config";
import { server } from "@/server";

const app = createApp(App)

app.use(PrimeVue);

app.use(router)

server();

app.mount('#app')
