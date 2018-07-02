<template>
  <div id="page1">
    <div class="title">跨域请求</div>
    <button @click="getdata">获取数据</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'page1',
  data(){
    return{
      res:''
    }
  },
  methods: {
    getdata(){
      axios.get('/api/login?telephone=18119684239&password=123456a')
      .then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
#page1 button{
  display: block;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  margin: 50px;
  border: none;
  background:lightskyblue;
  padding:  0 15px;
  color: #fff;
  outline: none;
}
</style>

