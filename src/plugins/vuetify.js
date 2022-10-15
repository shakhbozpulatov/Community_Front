import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

// const opts = {};

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
});
