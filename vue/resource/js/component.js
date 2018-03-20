// Vue.component('alert',{
// 	template:'<button @click="on_click">弹弹弹</button>',
// 	methods:{
// 		on_click:function(){
// 			alert('YO.')
// 		}
// 	}
// });

var Alert = {
	template:'<button @click="on_click">弹弹弹</button>',
	methods:{
		on_click:function(){
			alert('YO.')
		}
	}
}
new Vue({
	el:'#seg1',
	components:{
		/*'alert':{
			template:'<button @click="on_click">弹弹弹</button>',
			methods:{
				on_click:function(){
					alert('YO.')
				}
			}
		}*/
		alert : Alert
	}
});
new Vue({
	el:'#seg2'
});