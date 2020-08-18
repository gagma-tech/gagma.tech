import VueRouter from "vue-router";
import Main from "../views/Main";
import About from "../views/About";
export const router = new VueRouter({
  routes: [
    { path: "/", component: Main },
    { path: "/about", component: About },
  ],
});
