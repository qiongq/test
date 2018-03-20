//父组件
Vue.component('balance',{
	template:
	`
	<div>
		<show @show-balance="show_balance"></show>
		<div v-if="show">
			你的余额：￥98元
		</div>
	</div>
	`,
	methods:{
		show_balance:function(data){
			this.show = true;
			console.log('data:',data);
		}
	},
	data:function(){
		return {
			show:false,
		}
	}
})

//子组件
Vue.component('show',{
	template:'<button @click="on_click">显示余额</button>',
	methods:{
		on_click:function(){
			this.$emit('show-balance',{a:1,b:3})
		}
	}
})

new Vue({
	el:'#app',
});
