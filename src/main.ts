import Vue from "vue";
import App from "./App.vue";
import "./uni.promisify.adaptor";

Vue.config.productionTip = false;

const APP =
  typeof App === "function"
    ? App
    : Vue.extend(Object.assign({ mpType: "app" }, App));
const app = new APP();
app.$mount();
