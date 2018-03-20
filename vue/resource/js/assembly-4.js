//调度器
var Event = new Vue();
//组件1
Vue.component('huahua',{
	template:`
		<div>我说：
			<input @keyup="on_change" v-model="i_said" />
		</div>`,
	methods:{
		on_change:function(){
			Event.$emit('huahua-said-something',this.i_said);//创建自定义组件
		}
	},
	data:function(){
		return{
			i_said:'',
		};
	}
})

//组件2
Vue.component('shuandan',{
	template:`
	<div>花花说：{{huahua_said}}</div>`,
	data:function(){
		return {
			huahua_said:'',
		};
	},
	mounted:function(){//初始化完毕
		var me = this;//直接使用this，
		Event.$on('huahua-said-something',function(data){
			//console.log(data);
			me.huahua_said = data;
		});
	}
})

new Vue({
	el:'#app',
});
