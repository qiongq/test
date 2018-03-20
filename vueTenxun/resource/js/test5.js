new Vue({
	el: '#vue-app',
	data:{
		a: 0,
		b: 0,
		age: 20
	},
	/*methods:{
		//每次调用都会执行下列方法
		addToA:function(){
			console.log('Add To A');
			return this.a + this.age;
		},
		addToB:function(){
			console.log('Add To B');
			return this.b + this.age;
		}
	}*/
	computed:{
		addToA:function(){
			console.log('Add To A');
			return this.a + this.age;
		},
		addToB:function(){
			console.log('Add To B');
			return this.b + this.age;
		}
	}
});