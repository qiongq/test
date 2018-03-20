var app = new Vue({
	el:'#app',//绑定元素，即生成对象产生的域作用在哪个元素上
	data:{
		name:null,//data中所有的数据属性都是绑定在el元素上的
		age:null,
		sex:null,
	}
})