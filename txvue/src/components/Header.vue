<template>
	<header @click="changeTitle">
		<h1>{{title1}}{{title}}</h1>
	</header>
</template>

<script>
	export default{
		name:'app-header',
		props:{
			title:{
				type:String
			}
		},
		data(){
			return {
				title1:'vue.js样式'
			}
		},
		methods:{
			changeTitle:function(){
				//this.title= 'changed';  //只能修改header中title的值，不能修改父组件中title的值
				this.$emit('titleChanged','子向父组件传值');
			}
		},
		/*beforeCreate:function(){
			alert('beforeCreate：组件实例化之前执行的函数');
		},
		Created:function(){
			alert('Created：组件实例化完毕，但页面还未显示');
		},
		beforeMount:function(){
			alert('beforeMount：组件挂载前，页面仍未展示，但虚拟dom已经配置');
		},
		mounted:function(){
			alert('mounted：组件挂在前，此方法执行后，页面显示');
		},
		beforeUpdate:function(){
			alert('beforeUpdate：组件更新前，页面仍未更新，但虚拟dom已经配置');
		},
		updated:function(){
			alert('updated：组件更新后，此方法执行后，页面显示');
		},
		beforeDestory:function(){
			alert('beforeDestory:组件销毁前');
		},
		destoryed:function(){
			alert('destoryed:组件销毁');
		}*/
	}
</script>

<style scoped>
	header{
		background: lightgreen;
		padding: 10px;
	}
	h1{
		color: #222;
		text-align: center;
	}
</style>