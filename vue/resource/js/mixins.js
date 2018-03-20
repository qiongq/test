var base = {
	methods:{
		show:function(){
			this.visible = true;
		},
		hide:function(){
			this.visible = false;
		},
		toggle:function(){
			this.visible = !this.visible;
		}
	},
	data:function(){
		return {
			visible: false,
		}
	}
};

Vue.component('tooltip',{
	template:`
	<div>
		<span @mouseenter="show" @mouseleave="hide">bys</span>
		<div v-if="visible">
			jksadhjk sadkjshadkjshd jkhsdjsa
		</div>
	</div>
	`,
	/*methods:{
		show:function(){
			this.visible = true;
		},
		hide:function(){
			this.visible = false;
		},
	},
	data:function(){
		return {
			visible: false,
		}
	}*/
	mixins:[base],
	data:function(){   //明确定义的东西会覆盖掉mixins中的
		return {
			visible: true,
		}
	}

})

Vue.component('popup',{
	template:`
	<div>
		<button @click="toggle">popup</button>
		<div v-if="visible">
			<span @click="hide">X</span>
			<h4>title</h4>
			加速带回家卡号打卡机的时候就是空间撒谎的空间撒谎的会计师点击撒谎的空间撒空间撒很大声
		</div>
	</div>
	`,
	/*methods: {
		toggle:function(){
			this.visible = !this.visible;
		}
	},
	data: function(){
		return {
			visible:false,
		}
	}*/
	mixins:[base]
})


new Vue({
	el: '#app',
	data: {

	}
})