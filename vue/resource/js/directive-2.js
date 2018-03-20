Vue.directive('pin',function(el,binding){
	//el:会把指令所在的整个元素,如果安装了jq，可以无缝衔接,eg：var $el = $(el);
	//binding:指令传进来的值或其他基本信息
	var pinned = binding.value;
	var position =binding.modifiers;
	var warning = binding.arg;
	console.log('position:',position);
	if(pinned){
		el.style.position='fixed';
		for(var key in position){
			if(position[key]){
				el.style[key] ='10px';
			}
		}
		if(warning){
			el.style.background = 'yellow';
		}
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