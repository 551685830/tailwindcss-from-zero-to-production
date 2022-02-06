import { createRouter, createWebHashHistory } from "vue-router"
import Button from "../components/Button.vue"
import Drop from "../components/Drop.vue"

const routes = [
  {
    name: "index",
    path: "/",
    component: Button,
  },
  {
    name: "drop",
    path: "/drop",
    component: Drop,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
