import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import User from '../components/user/User'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',redirect:'/login' },
    {path:'/login',component:Login },
    {
      path:'/home',
      component:Home,
      redirect: '/welcome',
      children: [{ path:'/welcome',component: Welcome},{ path:'/users', component: User }]
    }

  ]
})

// router.beforeEach((to, from, next)=>{
//   if(to.path === '/login') return next()
//   获取token

//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')

// })

export default router
