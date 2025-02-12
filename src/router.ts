import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/pages/Home.vue") },
  { path: "/completed", component: () => import("@/pages/Complete.vue") }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
