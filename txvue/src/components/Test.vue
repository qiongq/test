<template>
	<div class="test">
		<!--获取数据-->
		<h1>{{title}}</h1>
		<p>{{user.firstName}}</p>
		<p v-text="user.lastName"></p>

		<!-- v-if -->
		<p v-if="showName">{{user.firstName}}</p>
		<!-- v-else -->
		<p v-else>Nobody</p>

		<!-- v-for -->
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>

		<!-- v-on -->
		<button v-on:click="greet('hello everybody')">say hi</button>

		<!-- 键盘事件 -->
		<input @keyup="pressKey" @keyup.alt.enter="enterHit" type="text" />

		<hr />
		<!-- computed -->
		<label >firstName</label>
		<input type="text" v-model="user.firstName" />
		<br />
		<label >lastName</label>
		<input type="text" v-model="user.lastName" />
		<br />
		<h3 fullName>{{fullName}}</h3>

		<!-- props属性 -->
		<h2>{{msg}}</h2>
	</div>
</template>

<script>
	export default{
		name:"test",
		props:{
			msg:{
				type: String,
				default:'默认就是当前这些文字'
			}
		},
		data(){
			return {
				title:'hello vue.js',
				user:{
					firstName:'andy',
					lastName:'lau'
				},
				showName:true,
				items:[
					{title:"item5"},
					{title:"item10"},
					{title:"item15"}
				]
			}
		},
		methods:{
			greet:function(greeting){
				alert(greeting);
			},
			pressKey:function(){
				console.log('sad');
			},
			enterHit:function(){
				console.log('你触发了回车键');
			}
		},
		computed:{
			fullName:function(){
				return this.user.firstName + " " + this.user.lastName;
			}
		}
	}
</script>

<style scoped>

</style>