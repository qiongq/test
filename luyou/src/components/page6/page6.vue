<template>
  <div id="page6">
    <div class="second-navbox">
      <ul class="second-nav">
        <router-link :to="{name:'Page61Link'}">多显示单滑动</router-link>
        <router-link :to="{name:'Page62Link'}">多显示多滑动</router-link>
        <router-link :to="{name:'Page63Link'}">旋转木马</router-link>
        <router-link :to="{name:'Page64Link'}">单显示滑动</router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'page6',
}
</script>

<style>
.second-navbox{
  background: #3a3939;
}
.second-nav{
  display: -webkit-flex;
  text-align: center;
  justify-content: space-around;
  width: 1200px;
  margin: 0 auto;
}
.second-nav a{
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  line-height: 40px;
}

</style>
