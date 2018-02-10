import store from '../store'

export function requireAuth (route) {
  route.beforeEnter = (to, from, next) => {
    if (!store.state.authenticated) {
      next('/signin')
      return
    }
    next()
  }
  return route
}

export function requireUnauth (route) {
  route.beforeEnter = (to, from, next) => {
    if (store.state.authenticated) {
      next('/')
      return
    }
    next()
  }
  return route
}
