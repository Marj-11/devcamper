import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3ae46a89 = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages_about-us_index" */))
const _91fa6e26 = () => interopDefault(import('..\\pages\\bootcamps\\index.vue' /* webpackChunkName: "pages_bootcamps_index" */))
const _1ee38556 = () => interopDefault(import('..\\pages\\courses\\index.vue' /* webpackChunkName: "pages_courses_index" */))
const _5022d5c4 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _ced12d62 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages_signup_index" */))
const _361993f6 = () => interopDefault(import('..\\pages\\bootcamps\\bootcampForm\\index.vue' /* webpackChunkName: "pages_bootcamps_bootcampForm_index" */))
const _38bf104d = () => interopDefault(import('..\\pages\\bootcamps\\_id\\index.vue' /* webpackChunkName: "pages_bootcamps__id_index" */))
const _3c97c636 = () => interopDefault(import('..\\pages\\courses\\_id\\index.vue' /* webpackChunkName: "pages_courses__id_index" */))
const _ab143c32 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/about-us",
    component: _3ae46a89,
    name: "about-us"
  }, {
    path: "/bootcamps",
    component: _91fa6e26,
    name: "bootcamps"
  }, {
    path: "/courses",
    component: _1ee38556,
    name: "courses"
  }, {
    path: "/login",
    component: _5022d5c4,
    name: "login"
  }, {
    path: "/signup",
    component: _ced12d62,
    name: "signup"
  }, {
    path: "/bootcamps/bootcampForm",
    component: _361993f6,
    name: "bootcamps-bootcampForm"
  }, {
    path: "/bootcamps/:id",
    component: _38bf104d,
    name: "bootcamps-id"
  }, {
    path: "/courses/:id",
    component: _3c97c636,
    name: "courses-id"
  }, {
    path: "/",
    component: _ab143c32,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
