import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _37f4affe = () => import('../pages/work.vue' /* webpackChunkName: "pages/work" */).then(m => m.default || m)
const _0e7603cd = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _4b8118e0 = () => import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _1ccf5264 = () => import('../pages/services.vue' /* webpackChunkName: "pages/services" */).then(m => m.default || m)
const _2e2dde92 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _4f21d3d0 = () => import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */).then(m => m.default || m)
const _917f1e60 = () => import('../pages/_lang/services.vue' /* webpackChunkName: "pages/_lang/services" */).then(m => m.default || m)
const _016692c4 = () => import('../pages/_lang/contact.vue' /* webpackChunkName: "pages/_lang/contact" */).then(m => m.default || m)
const _2f69f90b = () => import('../pages/_lang/about.vue' /* webpackChunkName: "pages/_lang/about" */).then(m => m.default || m)
const _eb81d9fa = () => import('../pages/_lang/work.vue' /* webpackChunkName: "pages/_lang/work" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/work",
			component: _37f4affe,
			name: "work"
		},
		{
			path: "/about",
			component: _0e7603cd,
			name: "about"
		},
		{
			path: "/contact",
			component: _4b8118e0,
			name: "contact"
		},
		{
			path: "/services",
			component: _1ccf5264,
			name: "services"
		},
		{
			path: "/",
			component: _2e2dde92,
			name: "index"
		},
		{
			path: "/:lang",
			component: _4f21d3d0,
			name: "lang"
		},
		{
			path: "/:lang/services",
			component: _917f1e60,
			name: "lang-services"
		},
		{
			path: "/:lang/contact",
			component: _016692c4,
			name: "lang-contact"
		},
		{
			path: "/:lang/about",
			component: _2f69f90b,
			name: "lang-about"
		},
		{
			path: "/:lang/work",
			component: _eb81d9fa,
			name: "lang-work"
		}
    ],
    
    
    fallback: false
  })
}
