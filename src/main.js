import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "./assets/css/tailwind.css";
import vuetify from "@/plugins/vuetify";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import VueAnimateNumber from "vue-animate-number";
import "vue-material-design-icons/styles.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuetify);
Vue.use(VueAnimateNumber);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
