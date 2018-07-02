<template>
  <div id="page61">
    <div class="title">多显示单滑动（无缝滚动）</div>
    <div class="scroll-box">
      <!--当图片小于四张时，静态排版-->
      <ul v-if="num < 4" class="scroll-ul" >
        <li v-for="(item,index) in images">
          <div :class="item.class">{{item.alt}}</div>
        </li>
      </ul>
      <!--当图片小于四张时，无缝滚动-->
      <ul v-if="num >=4 " class="scroll-ul" :class="{anim:animate==true}">
        <li v-for="(item,index) in images">
          <div :class="item.class">{{item.alt}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page61',
  data(){
    return{
      images:'',//图片资源
      num:0,//图片数量
      animate:false,
    }
  },
  methods: {
    scroll(){
       this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
       setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
               this.images.push(this.images[0]);  // 将数组的第一个元素添加到数组的
               this.images.shift();               //删除数组的第一个元素
               this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
       },2000)
    }
  },
  created () {
    let images = [
			{
        class:'color1',
        alt:'images1'
			},
			{
        class:'color2',
        alt:'images2'
			},
			{
        class:'color3',
        alt:'images3'
			},
      {
        class:'color4',
        alt:'images4'
			}
		];
    this.num = images.length
    //console.log(this.num);
    if(this.num > 3){
      images = images.concat(images);//concat用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本
      setInterval(this.scroll,4000)
    } 
    this.images = images;
    //console.log(this.images);
  }
}
</script>

<style scoped>
.scroll-box{
  position: relative;
  width:800px;
  height: 200px;
  overflow: hidden;
  margin: 50px auto;
}
.scroll-box ul{
  position: absolute;
  width: 500%;
  top: 0;
  left: 0;
  list-style-type: none;
  margin-left:0;
  background-color: pink;
  height: 200px;
}
.scroll-box ul li{
  float: left;
  width: 200px;
  height: 200px;
}
.scroll-box ul li div{
  width: 100%;
  height: 100%;
  font-size: 40px;
  color: #fff;
  line-height: 200px;
  text-align: center;
}
.scroll-box ul li div.color1{
  background-color:deeppink;
}
.scroll-box ul li div.color2{
  background-color:orangered;
}
.scroll-box ul li div.color3{
  background-color:khaki;
}
.scroll-box ul li div.color4{
  background-color:yellowgreen;
}
.scroll-box ul.anim{
    transition: all 0.5s;
    left: -200px;
}
</style>
