<template>
  <div id="page64">
    <div class="title">单显示滑动</div>
    <div id="slider">
      <div class="window">
        <!--图片-->
        <ul class="container" :style="containerStyle">
          <li>
            <div :class="sliders[sliders.length - 1].class">{{sliders[sliders.length - 1].alt}}</div>
          </li>
          <li v-for="(item, index) in sliders" :key="index">
            <div :class="item.class">{{item.alt}}</div>
          </li>
          <li>
            <div :class="sliders[0].class">{{sliders[0].alt}}</div>
          </li>
        </ul>

        <!--两侧的箭头-->
        <ul class="direction">
          <li class="left">
            <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z"  /></svg>          
          </li>
          <li class="right">
            <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z"  /></svg>          
          </li>
        </ul>

        <!--下面的小圆点-->
        <ul class="dots">
          <li v-for="(dot, i) in sliders" :key="i" 
          :class="{dotted: i === (currentIndex-1)}"
          >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page64",
  data() {
    return {
      currentIndex:1,
      distance:-600,
      sliders:[]
    };
  },
  methods: {},
  computed:{
    containerStyle() {  //这里用了计算属性，用transform来移动整个图片列表
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    }
  },
  created() {
    let _this = this;
    let sliders = [
      {
        class: "color1",
        alt: "images1"
      },
      {
        class: "color2",
        alt: "images2"
      },
      {
        class: "color3",
        alt: "images3"
      },
      {
        class: "color4",
        alt: "images5"
      }
    ];
    this.sliders = sliders;
  },
  watch: {}
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
ol,ul{
  list-style: none;
}
#slider{
  text-align: center;
}
.window{
  position:relative;
  width:600px;
  height:300px;
  margin:0 auto;
  overflow:hidden;
}
.container{
  display:flex;
  position:absolute;
  margin: 50px auto;
}
.container li div{
  width:600px;
  height:300px;
  line-height: 300px;
  text-align: center;
  font-size: 40px;
  color: #fff;
}
.container li div.color1{
  background-color: deeppink;
}
.container li div.color2{
  background-color: orangered;
}
.container li div.color3{
 background-color: khaki;
}
.container li div.color4{
 background-color: yellowgreen;
}
.left, .right{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:50px;
  height:50px;
  background-color:rgba(0,0,0,.3);
  border-radius:50%;
  cursor:pointer;
}
.left{
  left:3%;
  padding-left:12px;
  padding-top:10px;
}
.right{
  right:3%;
  padding-right:12px;
  padding-top:10px;
}
img{
  user-select: none;
}
.dots{
    position:absolute;
    bottom:10px;
    left:50%;
    transform:translateX(-50%);
  }
.dots li{
  display:inline-block;
  width:15px;
  height:15px;
  margin:0 3px;
  border:1px solid white;
  border-radius:50%;
  background-color:#333;
  cursor:pointer;
}
.dots .dotted{
  background-color:orange;
}
</style>
