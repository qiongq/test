Vue.component('like',{
	template:'<button :class="{liked:liked}" @click="toggle_like()">赞{{like_count}}</button>',
	/*es6写法*/
	/*template:
		`<button :class="{liked:liked}" @click="toggle_like()">
			赞{{like_count}}
		</button>`,*/
	/*写在html页面中*/
	/*template:'#like-component-tpl',*/
	data:function(){
		return {
			like_count:10,
			liked:false,
		}
	},
	methods:{
		toggle_like:function(){
			if(!this.liked)
				this.like_count++;
			else
				this.like_count--;
			this.liked = !this.liked
		}
	}
})

new Vue({
	el:'#app',
})