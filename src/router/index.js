import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'
import Verify from '@/components/Verify'

import { requireUnauth } from './authGuard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    requireUnauth({
      path: '/signin',
      name: 'Sign In',
      component: SignIn
    }),
    requireUnauth({
      path: '/register',
      name: 'Register',
      component: Register
    }),
    requireUnauth({
      path: '/verify',
      name: 'Verify Account',
      component: Verify
    })
  ]
})
