import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import UserManagementView from "@/views/UserManagementView";
import DeviceManagementView from "@/views/DeviceManagementView";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/register',
    name: 'home',
    component: RegisterView
  },
  {
    path: '/user',
    name: 'home',
    component: UserManagementView
  },
  {
    path: '/device',
    name: 'home',
    component: DeviceManagementView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
