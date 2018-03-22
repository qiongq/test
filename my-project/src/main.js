// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'Vue-router'
import {routes} from './routes'


Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode:'history',
	scrollBehavior(to,from,savedPosition){
		/*return {
			x:0,y:500
		}*/
		/*return {
			selector:'.btn'
		}*/
		if(savedPosition){
			return savedPosition
		}else{
			return{x:0,y:0}
		}
	}
})

//全局守卫  不加载页面
/*
	to:要进入到哪个函数
	from:从哪个路由离开
	next:对应的函数，决定是否要展示看到的路由页面
*/
/*router.beforeEach((to,from,next) => {
	//alert('还没登陆，请先登录！');
	//next();

	//判断store.gettes.isLogin === false
	console.log(to);
	if(to.path == '/login' || to.path == '/register'){
		next();
	}else{
		alert('还没登陆，请先登录！');
		next('/login');
	}
})*/

//后置钩子  加载页面
/*router.afterEach((to,from) => {
	alert('after each');
})*/



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
