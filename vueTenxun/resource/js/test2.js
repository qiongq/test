new Vue({
	el:'#vue-app',
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add:function(inc){
			this.age+=inc;
		},
		subtract:function(dec){
			this.age-=dec;
		},
		updateXY:function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		stopMoving:function(event){
			//一般方法
			event.stopPropagation();
		},
		alert:function(){
			alert('hell andy!')
		}
	}
})