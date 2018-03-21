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

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

Vue.use(VueRouter)

const routes = [
	{path:'/',name:"homeLink",component:Home},
	{path:'/menu',name:"menuLink",component:Menu},
	{path:'/admin',name:"adminLink",component:Admin},
	{path:'/about',name:"aboutLink",redirect:'/history',component:About,children:[
		{path:'/about/contact',name:"contactLink",redirect:'/phone',component:Contact,children:[
			{path:'/phone',name:"phoneLink",component:Phone},
			{path:'/personname',name:"personnameLink",component:PersonName}
		]},
		{path:'/delivery',name:"deliveryLink",component:Delivery},
		{path:'/history',name:"historyLink",component:History},
		{path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
	]},
	{path:'/login',name:"loginLink",component:Login},
	{path:'/register',name:"registerLink",component:Register},
	{path:'*',redirect:'/'} //当路径错误时，跳转默认路径
]

const router = new VueRouter({
	routes,
	mode:'history'
})

//全局守卫
/*
	to:要进入到哪个函数
	from:从哪个路由离开
	next:对应的函数，决定是否要展示看到的路由页面
*/
router.beforeEach((to,from,next) => {

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
