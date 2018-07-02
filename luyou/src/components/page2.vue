<template>
  <div id="page2">
    <div class="title">获取验证码</div>
    <div :class="['code',{'active':status}]" @click="change">{{text}}<span v-if="status">{{time}}秒</span></div>
  </div>
</template>

<script>
export default {
  	name: 'page2',
  	data(){
		return{
		time:0,
		status:false,
		text:""
		}
  	},
	methods: {
		change(){
			if(this.status == false){
				this.status = true;
				this.time = 10;
				this.text = '倒计时';
			}
		}
	},
	created () {
		let text = '获取验证码';
		this.text = text;
	},
	watch: {
		time:function(){
			let _this = this;
			let chan = null;
			if(this.time==10){
				chan = setInterval(function () { 
					_this.time--;
				 },1000)
			}else if(this.time == 0){
					clearInterval(chan);
					_this.status = false;
					_this.text = '再次获取验证码';
			}
		}
	}
}
</script>

<style scoped>
.code{
  display: block;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  margin: 50px;
  border: #e2e2e2;
  background:lightskyblue;
  padding:  0 15px;
  color: #fff;
  outline: none;
  width:100px;
  text-align: center;
}
.code.active{
  background: #e2e2e2;
}
</style>
