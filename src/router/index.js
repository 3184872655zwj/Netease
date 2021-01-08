import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',//默认首页
    name: 'Recommend',
    component: Recommend
  },
  {
    path:'/hot',
    name:'Hot',
    component:()=>import('../views/Hot.vue')
  },
  {
    path:'/search',
    name:'Search',
    component:()=>import('../views/Search.vue')
  }
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
