import { createApp } from "vue";
import App from "./views/App.vue";
import router from "./router";
import './index.css'
import VueKonva from 'vue-konva';

const app = createApp(App);

app.use(VueKonva);
app.use(router);

app.mount("#app");
