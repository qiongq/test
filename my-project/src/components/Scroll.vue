<template>
    <div id="scroll">
	    <div class="slider">
			<ul 
				v-if="num==1" 
				class="slider-group slider-first">
				<li v-for="items in sliderFirst">
					<img v-bind:src="items.src"/>
				</li>
			</ul>
			<ul 
				v-if="num==2" 
				class="slider-group" 
				v-for="(item,index) in num" 
				:key="index" 
				:class="{'slider-first':currentPage==index+1,'slider-second':(isDelayb==true&&index==1)||(isDelaya==true&&index==0)}">
                <li 
                    v-if="index==0"
                    v-for="items in sliderFirst">
                    <img v-bind:src="items.src" />
                </li>
                <li 
                    v-if="index==1" 
                    v-for="items in sliderSecond">
                    <img v-bind:src="items.src" />
                </li>
            </ul>
			<ul v-if="num>=3" class="slider-group" v-for="(item,index) in num" :key="index" :class="{'slider-first':currentPage==index+1,'slider-second':currentPage==index||(currentPage==num&&index==0)}">
                <li 
                    v-if="currentPage==index+1" 
                    v-for="items in sliderFirst" 
                >
                    <img v-bind:src="items.src" />
                </li>
                <li 
                    v-if="currentPage==index||(currentPage==num&&index==0)" 
                    v-for="items in sliderSecond" 
                >
                    <img v-bind:src="items.src" />
                </li>
                <li 
                    v-if="currentPage!=index+1&&(currentPage!=index||(currentPage!=num&&index!=0))" 
                    v-for="items in sliderNormal" 
                >
                    <img v-bind:src="items.src" />
                </li>
            </ul>
		</div>
    </div>
</template>
<script>
export default {
  	data() {
		return {
			images:'',
			num:0,//轮播总页数
			currentPage:1,//轮播当前页
			sliderFirst:[],//轮播当前显示项
			sliderSecond:[],//轮播预备显示项
			sliderNormal:[],//轮播已经显示项
			isDelaya:false,//当只有两组轮播时检测当前显示项
            isDelayb:false//当只有两组轮播时检测预备显示项
		};
	},
 	methods: {
		
  	},
  	created() {
		let _this = this;
		let images = [
			{
				src:'http://www.caiqi.com/upload/image/19/2017-06-07/2017060711393060.jpg'
			},
			{
				src:'http://www.caiqi.com/upload/image/19/2017-06-07/2017060711393060.jpg'
			},
			{
				src:'http://www.caiqi.com/upload/image/19/2017-06-07/2017060711393060.jpg'
			},
			{
				src:'http://www.caiqi.com/upload/image/19/2017-06-07/2017060711393060.jpg'
			}
		];

		this.images = images;
		console.log(this.images)
		//Math.ceil()  将数值向上舍入为最接近的整数
		this.num = this.images.length;
		this.sliderFirst = this.images[0];
		this.sliderSecond = this.images[1];
		//总项数超过3时开启轮播
		if(_this.num!=1){
			setInterval(function(){
				_this.currentPage++;
				if(_this.currentPage>_this.num){
					_this.currentPage = 1;
				}
			},5000)
		}
		//当只有两组轮播时开启预备显示项
		setTimeout(function(){
			_this.isDelayb = true;
		},3000)
  	},
  	/* watch:{
        //检测当前页变化
        currentPage:function(){
            let _this = this;
            let current = _this.currentPage-1;
			let num = _this.num-1;
			//当只有两组轮播时 当前显示项+预备显示项->已显示项+当前显示项->(延时以后)当前显示项+预备显示项
			if(num==1){
				if(_this.isDelaya == false){
					setTimeout(function(){
						_this.isDelaya = true;
					},3000)
				}else{
					_this.isDelaya = false;
				}
				if(_this.isDelayb == false){
					setTimeout(function(){
						_this.isDelayb = true;
					},3000)
				}else{
					_this.isDelayb = false;
				} 
			//超过两组轮播就当前显示项显示当前四个 预备显示项显示后四个 已经显示项显示前四个    
			}else{
				_this.sliderFirst = res.data.slice(current*4,current*4+4);
				_this.sliderSecond = res.data.slice(current*4+4,current*4+8);
				if(current==0){
					_this.sliderNormal = res.data.slice(num*4,num*4+4);
				}else{
					_this.sliderNormal = res.data.slice(current*4-4,current*4);
				}
			}
        }
    } */
};
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
.slider{
	width: 1200px;
    margin: 0 auto;
    height: 330px;
    margin-top: 30px;
    padding-top: 50px;
    overflow: hidden;
    position: relative;
}
.slider .slider-group{
    position: absolute;
    top: 0;
    width: 1280px;
    height: 280px;
    left: -1320px;
    -webkit-transition: all 3s;
    transition: all 3s;
    margin-top: 50px;
	list-style-type: none;
}
.slider .slider-first {
    left: -40px;
}
.slider .slider-group li{
    float: left;
    width: 238px;
    height: 278px;
    position: relative;
    margin: 0 40px;
}
.slider .slider-group li img{
	width: 100%;
	height: 100%;
}
</style>
