new Vue({
	el: '#vue-app',
	data:{
		name: '',
		age: '',
	},
	methods:{
		logName:function(){
			this.name = this.$refs.name.value;
			console.log(this.$refs.name);
			console.log(this.$refs.name.className);
		},
		logAge:function(){
			this.age = this.$refs.age.value;
		}
	}
});