new Vue({
	el: '#vue-app',
	data:{
		changeColor: false,
		changeLength:false
	},
	computed:{
		compClasses:function(){
			return {
				changeColor: this.changeColor,
				changeLength: this.changeLength
			}
		}
	}
});