//实例化vue对象
new Vue({
	el:'#vue-app',
	data :{
		name:'米斯特务',
		job:'web前端',
		website:'http://www.thenewstep.com',
		websitTag:"<a href='http://www.thenewstep.com'>百度链接</a>"
	},
	methods:{
		greet:function(time){
			return 'good ' + time + ' ' +this.name+ '!';
		}
	}
});

/*
* el:element 需要获取的元素，一定是html中的根容器元素
* data：用于数据的存储
* methods: 用于存储各种方法
*data-binding:给属性绑定对应的值
*/