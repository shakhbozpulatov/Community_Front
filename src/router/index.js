import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// let token = localStorage.getItem("token", token);

const routes = [
  {
    path: "/login",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// const isLoggedIn = () => {
//   return store.state.token;
// };
// const protectedRoutes = ["Dashboard"];

// router.beforeEach((to, from, next) => {
//   const isProtected = protectedRoutes.includes(to.name);
//   if (isProtected && !isLoggedIn()) {
//     next({
//       path: "/login",
//     });
//   } else next();
// });

export default router;
