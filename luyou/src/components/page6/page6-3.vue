<template>
    <div id="page63">
        <div class="title">旋转木马</div>
        <div id="slider" @mouseover="stopSlider" @mouseleave="goOnSlider">
            <div class="pic">
                <div 
                    v-for="(item,index) in images" 
                    :key="index"
                    :class="[
                        item.class,
                        {
                            'left-little':item.index==currentPic-2,
                            'left-big':item.index==currentPic-1,
                            'active':item.index==currentPic,
                            'right-big':item.index==currentPic+1,
                            'right-little':item.index==currentPic+2,
                            'normal-right':item.index>=currentPic+3,
                            'normal-left':item.index<=currentPic-3
                        },
                    ]"
                    @click="changeCurrentPic(item.index)"
                >{{item.num}}</div>
                </div>
                <div class="dot">
                    <span
                        v-for="(item,index) in normal" 
                        :key="index"
                        :class="{'active':index==(currentPic-1)%normal.length}"
                        @click="changeCurrentDot(index)"
                    ></span>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "page63",
    data(){
        return{
            normal: [],//原始图片列表
            images: [],//处理图片列表
            currentPic: 1,
            timer:null,
            changeOnce:true,
        }
    },
    methods:{
        stopSlider(){
            clearInterval(this.timer)
        },
        goOnSlider(){
            let _this = this;
            this.timer = setInterval(function(){
                _this.currentPic++;
                if(_this.currentPic>=_this.images[_this.normal.length+2].index&&_this.currentPic>=_this.images[2].index){
                    if(_this.images[0].index<_this.images[_this.normal.length].index){
                        for(let i=0;i<_this.normal.length;i++){
                            _this.images[i].index += _this.images.length;
                        }
                    }else{
                        for(let i=0;i<_this.normal.length;i++){
                            _this.images[i+9].index += _this.images.length;
                        }
                    }
                }
            },3000)
        },
        changeCurrentPic(index){
            let _this = this;
            if(index>_this.currentPic){
                if(_this.currentPic>=_this.images[_this.normal.length+2].index&&_this.currentPic>=_this.images[2].index){
                    if(_this.images[0].index<_this.images[_this.normal.length].index){
                        for(let i=0;i<_this.normal.length;i++){
                            _this.images[i].index += _this.images.length;
                        }
                    }else{
                        for(let i=0;i<_this.normal.length;i++){
                            _this.images[i+9].index += _this.images.length;
                        }
                    }
                }
            }else if(index<_this.currentPic){
                if(_this.currentPic<=_this.images[_this.normal.length*2-2].index&&_this.currentPic<=_this.images[_this.normal.length-2].index){
                    if(_this.images[0].index>_this.images[_this.normal.length].index){
                        for(let i=0;i<_this.normal.length;i++){
                            _this.images[i].index -= _this.images.length;
                        }
                    }else{
                        for(let i=0;i<_this.normal.length;i++){
                            _this.images[i+9].index -= _this.images.length;
                        }
                    }
                }
            }
            this.currentPic = index;
        },
        changeCurrentDot(index){
            let _this = this;
            if(_this.images[0].index<_this.images[_this.normal.length].index){
                _this.currentPic = _this.images[index].index;
            }else{
                _this.currentPic = _this.images[_this.normal.length+index].index;
            }
        }
    },
    created(){
        let _this = this;
        this.normal = [
            {num:1,class:'red'},
            {num:2,class:'orange'},
            {num:3,class:'yellow'},
            {num:4,class:'green'},
            {num:5,class:'blue'},
            {num:6,class:'cyan'},
            {num:7,class:'purple'},
            {num:8,class:'white'},
            {num:9,class:'black'},
        ]
        this.images = [
            {num:1,class:'red',index:1},
            {num:2,class:'orange',index:2},
            {num:3,class:'yellow',index:3},
            {num:4,class:'green',index:4},
            {num:5,class:'blue',index:5},
            {num:6,class:'cyan',index:6},
            {num:7,class:'purple',index:7},
            {num:8,class:'white',index:8},
            {num:9,class:'black',index:9},
            {num:1,class:'red',index:10},
            {num:2,class:'orange',index:11},
            {num:3,class:'yellow',index:12},
            {num:4,class:'green',index:13},
            {num:5,class:'blue',index:14},
            {num:6,class:'cyan',index:15},
            {num:7,class:'purple',index:16},
            {num:8,class:'white',index:17},
            {num:9,class:'black',index:18},
        ]
        this.timer = setInterval(function(){
            _this.currentPic++;
            if(_this.currentPic>=_this.images[_this.normal.length+2].index&&_this.currentPic>=_this.images[2].index){
                if(_this.images[0].index<_this.images[_this.normal.length].index){
                    for(let i=0;i<_this.normal.length;i++){
                        _this.images[i].index += _this.images.length;
                    }
                }else{
                    for(let i=0;i<_this.normal.length;i++){
                        _this.images[i+9].index += _this.images.length;
                    }
                }
            }
        },3000)
    }
}
</script>

<style scoped>
    #slider{
       width: 1000px;
       height: 300px;
       background-color: pink;
       margin: 0 auto;
       position: relative;
    }
    .red{
        background-color: red;
    }
    .orange{
        background-color: orange;
    }
    .yellow{
        background-color: yellow;
    }
    .green{
        background-color: green;
    }
    .blue{
        background-color: blue;
    }
    .cyan{
        background-color: cyan;
    }
    .purple{
        background-color: purple;
    }
    .white{
        background-color: white;
    }
    .black{
        background-color: black;
    }
    .pic{
        position: relative;
        width: 100%;
        height: 240px; 
    }
    .pic div{
        position: absolute;
        cursor: pointer;
        width: 600px;
        height: 200px;
        top: 40px;  
    }
    .pic .active{
        left: 200px;
        z-index: 3;
        transition: all 1s; 
    }
    .pic .left-little{
        transform: scale(0.6);
        left: -100px;
        z-index: 1;
        transition: all 1s; 
    }
    .pic .left-big{
        transform: scale(0.8);
        left: 50px;
        z-index: 2;
        transition: all 1s; 
    }
    .pic .right-big{
        transform: scale(0.8);
        left: 350px;
        z-index: 2;
        transition: all 1s; 
    }
    .pic .right-little{
        transform: scale(0.6);
        left: 500px;
        z-index: 1;
        transition: all 1s; 
    }
    .pic .normal-right{
        transform: scale(0.4);
        left: 900px;
    }
    .pic .normal-left{
        transform: scale(0.4);
        left: -500px;   
        transition: all 1s;
    }
    .dot{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
    }
    .dot>span{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
        margin: 25px 5px;
    }
    .dot .active{
        background-color: red;
    }
</style>
