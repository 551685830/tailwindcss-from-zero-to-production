import { createRouter, createWebHashHistory } from "vue-router"
import HelloWorld from "../components/HelloWorld.vue"
import About from "../components/About.vue"

const routes = [
  {
    name: "index",
    path: "/",
    component: HelloWorld,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
