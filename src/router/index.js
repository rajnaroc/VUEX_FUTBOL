import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import { auth } from '@/db/firebase'
const routes = [
  {
    path: '/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {requiresAuth: true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged((user) => {
    if(to.meta.requiresAuth && !user){
      next({name: 'login'})
    }else if( user && (to.name == 'login' || to.name == 'register')){
      next({name: 'home'})
    }
    else{
      next()
    }
  })
})

export default router
