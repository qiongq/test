var one = new Vue({
	el: '#vue-app1',
	data:{
		title:'app one 内容'
	},
	computed:{
		greet:function(){
			return 'hello app one!';
		}
	}
});

var two = new Vue({
	el: '#vue-app2',
	data:{
		title:'app two 内容'
	},
	methods:{
		changeTitle:function(){
			one.title = '已经改名了！';  //在app2中获取app1的title值并改变
		},
	},
	computed:{
		greet:function(){
			return 'hello app two!';
		}
	}
});

two.title = 'app two 的 title 也发生变化了！';  //直接改变app2实例的title值