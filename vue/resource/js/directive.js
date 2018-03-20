Vue.directive('pin',function(el,binding){
	//el:会把指令所在的整个元素,如果安装了jq，可以无缝衔接,eg：var $el = $(el);
	//binding:指令传进来的值或其他基本信息
	var pinned = binding.value;
	if(pinned){
		el.style.position='fixed';
		el.style.top='10px';
		el.style.left='10px';
	}else{
		el.style.position='static';
	}
})


new Vue({
	el:'#app',
	data:{
		card1:{
			pinned:false,
		},
		card2:{
			pinned:false,
		}
	}
})