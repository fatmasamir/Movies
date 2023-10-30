import { createApp } from "vue";
// App
import App from "./App.vue";
// bootstrap
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";
// global
import "./assets/css/_global.scss";
// router
import router from "./routes/index";
// store
import store from "./store";
// DeleteModel
import DeleteModel from "./components/global/Models/DeleteModel/index.vue";
// Vue3Toastify
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Vue3Toastify, {
  autoClose: 3000,
});
app.component("delete_model", DeleteModel);

app.component("BootstrapIcon", BootstrapIcon);
app.mount("#app");
