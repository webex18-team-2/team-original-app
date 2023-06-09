import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import WriteView from "../views/WriteView.vue"
import ReadView from "../views/ReadView.vue"
import CalendarView from "../views/CalendarView.vue"
import AnalysisView from "../views/AnalysisView.vue"

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
  {
    path: "/calendar",
    name: "calendar",
    component: "CalendarView",
  },
  {
    path: "/analysis",
    name: "analysis",
    component: "AnalysisView",
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
