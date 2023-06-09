import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import WriteView from "../views/WriteView.vue"
import ReadView from "../views/ReadView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/write",
    name: "write",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: WriteView,
  },
  {
    path: "/read-page",
    name: "ReadPage",
    component: ReadView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
