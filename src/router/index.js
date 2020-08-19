import VueRouter from "vue-router";
import Main from "../views/Main";
import About from "../views/About";
export const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: "/", component: Main },
    { path: "/about", component: About },
  ],
  mode: "history",
});
