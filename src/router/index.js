import { createRouter, createWebHistory } from "vue-router";
import Home from "./../views/Home.vue";
import About from "./../views/About.vue";
import Contact from "./../views/Contact.vue";
import Users from "./../views/Users.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
