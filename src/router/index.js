import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const BigScreen = () => import('@/views/big-screen')
const routes = [
  {
    name: 'BigScreen',
    path: '/',
    component: BigScreen
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
