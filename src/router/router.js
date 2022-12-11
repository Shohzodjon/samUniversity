import { defineAsyncComponent } from "vue";
import { RouteRecordRaw } from "vue-router";
const defaultLayout = defineAsyncComponent(() =>
  import("@/layout/Default.vue")
);

const routes: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: () => import("@/layout/LError.vue"),
  },
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
];
for (const route of routes) {
  if (route.meta == undefined) {
    route.meta = {};
  }

  if (route.meta.layout == undefined) {
    route.meta.layout = defaultLayout;
  }
}
export default routes;
