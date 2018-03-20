<template>
	<div id="users">
		<h1>hello users</h1>
		<ul>
			<li v-for="user in users">
				<h2>{{user.name}}</h2>
				<h3 >{{user.email}}</h3>
			</li>
		</ul>
		<button @click="deleteUser">删除</button>
	</div>
</template>
<!--
- 传值：string number boolean  发生改变时，其他引用也会改变
- 引用：array object  发生改变时，其他引用不会改变
-->

<script>
	export default {
		name:'users',
		//props:['users'],
		props:{
			users:{
				type:Array,//传递值的类型
				required:true//prop 指定验证规则。如果传入的数据不符合要求，Vue 会发出警告
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			deleteUser:function(){
				this.users.pop();
			}
		}
	}
</script>

<style scoped>
	h1{
		color: green;
	}
	#users{
		width: 100%;
		max-width: 1200px;
		margin: 40px auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
	ul{
		display: flex;
		flex-wrap: wrap;
		list-style-type: none;
		padding: 0;
	}
	li{
		flex-grow: 1;
		flex-basis: 200px;
		text-align: center;
		padding: 30px;
		border: 1px solid #222;
		margin: 10px;
	}
</style>