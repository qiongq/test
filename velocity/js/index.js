$(function(){
	//单个动画演示
	/*$('#div1').velocity({
		width:'300px',
		//height:'300px'
	},{
		duration:1000,    //动画持续时间
		complete:function(){  //动画结束调用的函数
			$('#div2').velocity({
				width:'300px'
			},{
				duration:1000,    //动画持续时间
				//delay:1000        //延迟时间
			});
		}
	});*/

	//动画序列
	/*var seq = [
		{
			elements:$('#div1'),
			properties:{width:'300px'},
			options:{duration:1000}
		},
		{
			elements:$('#div2'),
			properties:{width:'300px'},
			options:{duration:1000}
		},
		{
			elements:$('#div3'),
			properties:{width:'300px'},
			options:{duration:1000}
		},
	];

	$.Velocity.RunSequence(seq);*/

	//预定义动画
	/*$('#div1').on('mouseover',function(){
		$('#div1').velocity('callout.shake');
	})*/

	//自定义动画(一次定义多次使用)
	/*$.Velocity.RegisterEffect('lixin.pulse',{   //RegisterEffect可换为RegisterUI
		defaultDuration:300,
		calls:[
			[{scaleX:1.1},0.5],
			[{scaleX:1.0},0.5]
		]
	});

	$('#div2').on('mouseover',function(){
		$('#div2').velocity('lixin.pulse');
	})*/


	var container = $('.container');
	var box = $('.box');
	var buddy = $('.buddy');
	var pop = $('.pop');
	var open = $('.open');
	var close = $('.close');
	var imgs = pop.find('img');

	$.Velocity.RegisterUI('lixin.slideUpIn',{
		defaultDuration:500,
		calls:[
			[{opacity:[1,0],translateY:[0,100]}]
		]
	});

	var seqInit = [
		{
			elements:container,
			properties:'lixin.slideUpIn',
			options:{
				delay:300,
			}
		},
		{
			elements:box,
			properties:'lixin.slideUpIn',
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:buddy,
			properties:'lixin.slideUpIn',
			options:{
				delay:60,
				sequenceQueue:false
			}
		}
	];

	$.Velocity.RunSequence(seqInit);
})