<template>
  <div id="app">
    <ul>
        <!-- <li><a href="/">Home</a></li>
        <li><a href="/helloworld">Hello World</a></li> -->
        <!--a标签的缺点是不管点多少次都会重新刷新页面，影响性能-->
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/helloworld">Hello World</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
        <li><router-link to="/user">user</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/Test'
import User from './components/User'

export default {
  name: 'App',
  components:{
    Test
  }
}
</script>

<style scoped>
h1{
    color: purple;
  }
ul > li{
  display: inline-block;
}
</style>
