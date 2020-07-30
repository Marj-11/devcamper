import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6819b06f = () => interopDefault(import('..\\pages\\about-us\\index.vue' /* webpackChunkName: "pages_about-us_index" */))
const _30763fc7 = () => interopDefault(import('..\\pages\\bootcamps\\index.vue' /* webpackChunkName: "pages_bootcamps_index" */))
const _3f4cdb1e = () => interopDefault(import('..\\pages\\editBootcamps\\index.vue' /* webpackChunkName: "pages_editBootcamps_index" */))
const _538b1ff8 = () => interopDefault(import('..\\pages\\editUser\\index.vue' /* webpackChunkName: "pages_editUser_index" */))
const _e1706cc4 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _7c1fc66c = () => interopDefault(import('..\\pages\\reviews\\index.vue' /* webpackChunkName: "pages_reviews_index" */))
const _3e10f0b5 = () => interopDefault(import('..\\pages\\signup\\index.vue' /* webpackChunkName: "pages_signup_index" */))
const _aba3bcc2 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _521f0550 = () => interopDefault(import('..\\pages\\bootcamps\\bootcampForm\\index.vue' /* webpackChunkName: "pages_bootcamps_bootcampForm_index" */))
const _33f18124 = () => interopDefault(import('..\\pages\\login\\passwordModal\\index.vue' /* webpackChunkName: "pages_login_passwordModal_index" */))
const _7f05d1b3 = () => interopDefault(import('..\\pages\\bootcamps\\_id\\index.vue' /* webpackChunkName: "pages_bootcamps__id_index" */))
const _99c614d4 = () => interopDefault(import('..\\pages\\editBootcamps\\_bootcampId\\index.vue' /* webpackChunkName: "pages_editBootcamps__bootcampId_index" */))
const _461bfab2 = () => interopDefault(import('..\\pages\\editUser\\_user\\index.vue' /* webpackChunkName: "pages_editUser__user_index" */))
const _96a52b5a = () => interopDefault(import('..\\pages\\login\\_resetpassword\\index.vue' /* webpackChunkName: "pages_login__resetpassword_index" */))
const _5020aba4 = () => interopDefault(import('..\\pages\\reviews\\_id\\index.vue' /* webpackChunkName: "pages_reviews__id_index" */))
const _3aad524a = () => interopDefault(import('..\\pages\\users\\_id\\index.vue' /* webpackChunkName: "pages_users__id_index" */))
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
    path: "/editBootcamps",
    component: _3f4cdb1e,
    name: "editBootcamps"
  }, {
    path: "/editUser",
    component: _538b1ff8,
    name: "editUser"
  }, {
    path: "/login",
    component: _e1706cc4,
    name: "login"
  }, {
    path: "/reviews",
    component: _7c1fc66c,
    name: "reviews"
  }, {
    path: "/signup",
    component: _3e10f0b5,
    name: "signup"
  }, {
    path: "/users",
    component: _aba3bcc2,
    name: "users"
  }, {
    path: "/bootcamps/bootcampForm",
    component: _521f0550,
    name: "bootcamps-bootcampForm"
  }, {
    path: "/login/passwordModal",
    component: _33f18124,
    name: "login-passwordModal"
  }, {
    path: "/bootcamps/:id",
    component: _7f05d1b3,
    name: "bootcamps-id"
  }, {
    path: "/editBootcamps/:bootcampId",
    component: _99c614d4,
    name: "editBootcamps-bootcampId"
  }, {
    path: "/editUser/:user",
    component: _461bfab2,
    name: "editUser-user"
  }, {
    path: "/login/:resetpassword",
    component: _96a52b5a,
    name: "login-resetpassword"
  }, {
    path: "/reviews/:id",
    component: _5020aba4,
    name: "reviews-id"
  }, {
    path: "/users/:id",
    component: _3aad524a,
    name: "users-id"
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
