<template>
    <div id="app-header">
        <ul>
            <router-link :to="{name:'Page1Link'}">跨域请求</router-link>
            <router-link :to="{name:'Page2Link'}">获取验证码</router-link>
            <router-link :to="{name:'Page3Link'}">页面三</router-link>
            <router-link :to="{name:'Page4Link'}">页面四</router-link>
            <router-link :to="{name:'Page5Link'}">页面五</router-link>
            <router-link :to="{name:'Page6Link'}">轮播</router-link>
            <router-link :to="{name:'Page7Link'}">页面七</router-link>
            <router-link :to="{name:'Page8Link'}">页面八</router-link>
            <router-link :to="{name:'Page9Link'}">页面九</router-link>
            <router-link :to="{name:'Page10Link'}">页面十</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'app-header'
}
</script>

<style>
*{
    margin:0;
    padding: 0;
}
body {
    display: block;
    margin:0!important;
    padding: 0;
}
#app-header{
    margin: 0 auto;
    background: #000;
}
#app-header ul{
    display: -webkit-flex;
    text-align: center;
    justify-content: space-around;
    width: 1200px;
    margin: 0 auto;
}
#app-header ul a{
    font-size: 14px;
    color: #fff;
    text-decoration: none;
    line-height: 40px;
}
.title{
  background: deeppink;
  font-size: 14px;
  font-weight: bold;
  display: block;
  padding-left: 20px;
  color: #fff;
  line-height: 28px;
}
</style>


