// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入路由模块
import VueRouter from 'vue-router'
//引入http
import VueResource from 'vue-resource'
import App from './App'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Test from './components/Test'
import User from './components/User'

//import Users from './components/Users'

Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter)
//使用http
Vue.use(VueResource)


//配置路由
const router = new VueRouter({
	routes:[
		{path:'/',component:Home},
		{path:'/helloworld',component:HelloWorld},
		{path:'/test',component:Test},
		{path:'/user',component:User},
	],
	mode:'history',//干掉路由后的#号
	base:__dirname,//当前路径
})

//全局注册组件
//Vue.component('users',Users);

/* eslint-disable no-new */
new Vue({
	router,
  	el: '#app',
  	components: { App },
  	template: '<App/>'
})
