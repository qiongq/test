// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'Vue-router'

import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter)

const routes = [
	{path:'/',component:Home},
	{path:'/menu',component:Menu},
	{path:'/admin',component:Admin},
	{path:'/about',component:About},
	{path:'/login',component:Login},
	{path:'/register',component:Register}
]

const router = new VueRouter({
	routes,
	mode:'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
