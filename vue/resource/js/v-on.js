/*
* @Author: 茕茕
* @Date:   2018-01-10 21:48:35
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-10 22:20:42
*/
var app = new Vue({
	el:'#app',
	methods:{
		onClick:function(){
			console.log('clicked');
		},
		onEnter:function(){
			console.log('mouse Enter');
		},
		onOut:function(){
			console.log('mouse Out');
		},
		onSubmit:function(e){
			//e.preventDefault();//阻止表单提交系统默认刷新页面的行为
			console.log('submitted');
		},
		onKeyUp:function(){
			console.log('key pressed');
		}
	}
});