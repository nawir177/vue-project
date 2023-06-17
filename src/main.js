import { createApp } from "vue";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";

// Import Axios
import axios from "axios";

// Axios Interceptors
axios.interceptors.request.use(config => {
  config.baseURL = "https://jsonplaceholder.typicode.com";
  config.withCredentials = true;

  return config;
});

createApp(App).use(router).mount("#app");
