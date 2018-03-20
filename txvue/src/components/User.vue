<template>
	<div class="user">
		<h1>users</h1>

		<!--添加用户信息-->
		<form @submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="enter name" />
			<input type="text" v-model="newUser.email" placeholder="enter email" />
			<input type="submit" value="submit" />
		</form>
		<ul>
			<li v-for="user in users">
				<input type="checkbox" class="toggle" v-model="user.contacted" />
				<span :class="{contacted:user.contacted}">
					{{user.name}}:{{user.email}}<button @click="delteUser(user)">X</button>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"user",
		data(){
			return {
				newUser:{},
				users:[
					{
						name:"andy lau",
						email:"5441654224@qq.com",
						contacted: false
					},
					{
						name:"jack chegn",
						email:"5441653444@qq.com",
						contacted: false
					},
					{
						name:"mifei sd",
						email:"5441645424@qq.com",
						contacted: false
					}
				]
			}
		},
		methods:{
			addUser:function(e){
				// console.log('sdas');
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:false
				});
				e.preventDefault();
			},
			delteUser:function(){
				this.users.splice(this.users.indexOf(user),1);
			}
		},
		/*created:function(){
			//console.log('sdas');
			this.$http.get('http://jsonplaceholder.typicode.com/users')
				.then(function(response){
					this.users = response.data;
				})
		}*/
	}
</script>

<style scoped>
	.contacted{
		text-decoration: line-through;
	}
</style>