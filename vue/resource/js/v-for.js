/*
* @Author: 茕茕
* @Date:   2018-01-10 20:43:27
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-10 20:55:35
*/
var app = new Vue({
	el:'#app',//绑定元素，即生成对象产生的域作用在哪个元素上
	data:{
		//foodList:['葱'，'姜'，'蒜'],
		foodList:[
			{
				name:'葱',
				price:'10',
				discount:'.8'
			},
			{
				name:'姜',
				price:'9',
				discount:'.5'
			},
			{
				name:'蒜',
				price:'3',
			}
		]
	}
})
