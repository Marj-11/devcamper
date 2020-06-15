import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6819b06f = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages_about-us_index" */))
const _30763fc7 = () => interopDefault(import('..\\pages\\bootcamps\\index.vue' /* webpackChunkName: "pages_bootcamps_index" */))
const _0b74baa2 = () => interopDefault(import('..\\pages\\courses\\index.vue' /* webpackChunkName: "pages_courses_index" */))
const _3f4cdb1e = () => interopDefault(import('..\\pages\\editBootcamps\\index.vue' /* webpackChunkName: "pages_editBootcamps_index" */))
const _e1706cc4 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _3e10f0b5 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages_signup_index" */))
const _521f0550 = () => interopDefault(import('..\\pages\\bootcamps\\bootcampForm\\index.vue' /* webpackChunkName: "pages_bootcamps_bootcampForm_index" */))
const _7f05d1b3 = () => interopDefault(import('..\\pages\\bootcamps\\_id\\index.vue' /* webpackChunkName: "pages_bootcamps__id_index" */))
const _4567ffcb = () => interopDefault(import('..\\pages\\courses\\_id\\index.vue' /* webpackChunkName: "pages_courses__id_index" */))
const _99c614d4 = () => interopDefault(import('..\\pages\\editBootcamps\\_bootcampId\\index.vue' /* webpackChunkName: "pages_editBootcamps__bootcampId_index" */))
const _cd6fa166 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _6819b06f,
    name: "about-us"
  }, {
    path: "/bootcamps",
    component: _30763fc7,
    name: "bootcamps"
  }, {
    path: "/courses",
    component: _0b74baa2,
    name: "courses"
  }, {
    path: "/editBootcamps",
    component: _3f4cdb1e,
    name: "editBootcamps"
  }, {
    path: "/login",
    component: _e1706cc4,
    name: "login"
  }, {
    path: "/signup",
    component: _3e10f0b5,
    name: "signup"
  }, {
    path: "/bootcamps/bootcampForm",
    component: _521f0550,
    name: "bootcamps-bootcampForm"
  }, {
    path: "/bootcamps/:id",
    component: _7f05d1b3,
    name: "bootcamps-id"
  }, {
    path: "/courses/:id",
    component: _4567ffcb,
    name: "courses-id"
  }, {
    path: "/editBootcamps/:bootcampId",
    component: _99c614d4,
    name: "editBootcamps-bootcampId"
  }, {
    path: "/",
    component: _cd6fa166,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
