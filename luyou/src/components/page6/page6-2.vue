<template>
  <div id="page62">
    <div class="title">多显示多滑动</div>
    <div class="scroll-box">
      	<!--当num为1-->
      	<ul v-if="num == 1">
        	<li v-for="items in images"><div :class="items.class">{{items.alt}}</div></li>
      	</ul>
		<!--当num为2-->
		<ul
			v-if="num ==2"
			v-for="(item,index) in num" 
			:key="index" 
			:class="{'slider-second':(isDelayb==true&&index==1)||(isDelaya==true&&index==0),'slider-first':currentPage==index+1}"
		>
			<!--第一组-->
			<li v-if="index == 0" v-for="items in sliderFirst">
				<div :class="items.class">{{items.alt}}</div>
			</li>
			<!--第二组-->
			<li v-if="index == 1" v-for="items in sliderSecond">
				<div :class="items.class">{{items.alt}}</div>
			</li>
      	</ul>
      	<!--当num大于2-->
		<ul v-if="num>=3" v-for="(item,index) in num" :key="index" :class="{'slider-first':currentPage==index+1,'slider-second':currentPage==index||(currentPage==num&&index==0)}">
			<!--第一组-->
			<li 
				v-if="currentPage==index+1" 
				v-for="items in sliderFirst" 
				:key="items.id"
			>
				<div :class="items.class">{{items.alt}}</div>
			</li>
			<!--第二组-->
			<li 
				v-if="currentPage==index||(currentPage==num&&index==0)" 
				v-for="items in sliderSecond" 
				:key="items.id"
            >
				<div :class="items.class">{{items.alt}}</div>
			</li>
			<!--剩余组-->
			<li 
				v-if="currentPage!=index+1&&(currentPage!=index||(currentPage!=num&&index!=0))" 
				v-for="items in sliderNormal" 
				:key="items.id"
            >
				<div :class="items.class">{{items.alt}}</div>
			</li>
		</ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "page62",
  data() {
    return {
      images: [], //图片路径
      num: 0, //轮播总页数
      sliderFirst: [], //当前展示页内容
      sliderSecond: [], //预备展示页内容
      sliderNormal: [], //轮播已经显示项
      currentPage: 1,
      isDelaya: false, //当只有两组轮播时检测当前显示项
      isDelayb: false //当只有两组轮播时检测预备显示项
    };
  },
  created() {
    let _this = this;
    let images = [
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
        alt: "images4"
      },
      {
        class: "color1",
        alt: "images5"
      },
      {
        class: "color2",
        alt: "images6"
      },
      {
        class: "color3",
        alt: "images7"
      },
      {
        class: "color4",
        alt: "images8"
      },
      {
        class: "color1",
        alt: "images9"
      },
      {
        class: "color2",
        alt: "images10"
      },
      {
        class: "color3",
        alt: "images11"
      },
      {
        class: "color4",
        alt: "images12"
      },
	  {
        class: "color1",
        alt: "images13"
      },
	  {
        class: "color2",
        alt: "images14"
      },
      {
        class: "color3",
        alt: "images15"
      },
      {
        class: "color4",
        alt: "images16"
      }
    ];

    this.images = images;
    this.num = Math.ceil(images.length / 4); //Math.ceil向上取整
    this.sliderFirst = images.slice(0, 4);
    this.sliderSecond = images.slice(4, 8);

    if (_this.num > 1) {
      setInterval(function() {
        _this.currentPage++;
        if (_this.currentPage > _this.num) {
          _this.currentPage = 1;
        }
      }, 5000);
    }
    //当只有两组轮播时开启预备显示项
    setTimeout(function() {
      _this.isDelayb = true;
    }, 3000);
  },
  watch: {
    currentPage: function() {
      let _this = this;
      let current = _this.currentPage - 1;
      let num = _this.num - 1;
      //当只有两组轮播时 当前显示项+预备显示项->已显示项+当前显示项->(延时以后)当前显示项+预备显示项
      if (num == 1) {
        if (_this.isDelaya == false) {
          setTimeout(function() {
            _this.isDelaya = true;
          }, 3000);
        } else {
          _this.isDelaya = false;
        }
        if (_this.isDelayb == false) {
          setTimeout(function() {
            _this.isDelayb = true;
          }, 3000);
        } else {
          _this.isDelayb = false;
        }
        //超过两组轮播就当前显示项显示当前四个 预备显示项显示后四个 已经显示项显示前四个
      } else {
        _this.sliderFirst = this.images.slice(current * 4, current * 4 + 4);
        _this.sliderSecond = this.images.slice(
          current * 4 + 4,
          current * 4 + 8
        );
        if (current == 0) {
          _this.sliderNormal = this.images.slice(num * 4, num * 4 + 4);
        } else {
          _this.sliderNormal = this.images.slice(current * 4 - 4, current * 4);
        }
      }
	  //console.log(_this.sliderNormal);
    }
  }
};
</script>

<style scoped>
.scroll-box {
  position: relative;
  width: 800px;
  height: 200px;
  overflow: hidden;
  margin: 50px auto;
}
.scroll-box ul {
  position: absolute;
  width: 100%;
  top: 0;
  left: -800px;
  list-style-type: none;
  margin-left: 0;
  background-color: pink;
  height: 200px;
  transition: all 3s;
}
.scroll-box ul li {
  float: left;
  width: 200px;
  height: 200px;
}
.scroll-box ul li div {
  width: 100%;
  height: 100%;
  font-size: 40px;
  color: #fff;
  line-height: 200px;
  text-align: center;
}
.scroll-box ul li div.color1 {
  background-color: deeppink;
}
.scroll-box ul li div.color2 {
  background-color: orangered;
}
.scroll-box ul li div.color3 {
  background-color: khaki;
}
.scroll-box ul li div.color4 {
  background-color: yellowgreen;
}
.scroll-box ul.slider-second {
  left: 800px;
  transition: none;
}
.scroll-box ul.slider-first {
  left: 0px;
}
</style>
