import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _665943ee = () => interopDefault(import('../client/pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _400d85ce = () => interopDefault(import('../client/pages/register/index.vue' /* webpackChunkName: "pages/register/index" */))
const _2aa45e5a = () => interopDefault(import('../client/pages/result/index.vue' /* webpackChunkName: "pages/result/index" */))
const _d5be5e22 = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _665943ee,
    name: "login"
  }, {
    path: "/register",
    component: _400d85ce,
    name: "register"
  }, {
    path: "/result",
    component: _2aa45e5a,
    name: "result"
  }, {
    path: "/",
    component: _d5be5e22,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
