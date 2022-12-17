import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/news",
      name: "news",
      component: () => import("@/pages/NewsPage.vue"),
    },
    {
      path: "/faculty",
      name: "faculty",
      component: () => import("@/pages/FacultyPage.vue"),
    },
    {
      path: "/librery",
      name: "librery",
      component: () => import("@/pages/Books.vue"),
    },
  ],
});

export default router;
