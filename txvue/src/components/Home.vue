<template>
  <div id="home">
    <app-header @titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
//局部注册组件
import Users from './Users'
import Header from './Header'
import Footer from './Footer'


export default {
  name: 'home',
  data(){
    return {
        users:[
            /*{name:'andy',position:'web开发',show:false},
            {name:'andy',position:'web开发',show:false},
            {name:'andy',position:'web开发',show:false},
            {name:'andy',position:'web开发',show:false},
            {name:'andy',position:'web开发',show:false},
            {name:'andy',position:'web开发',show:false},
            {name:'andy',position:'web开发',show:false},*/
        ],
        title:'传递的是一个值（number string boolean）'
    }
  },
  methods:{
    updateTitle(title){
        this.title = title;
    }
  },
  components:{
    'users':Users,//前面的users可以省略，直接写成Users,起名不要与系统标签名相同
    'app-header':Header,
    'app-footer':Footer
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/users')
        .then((data) => {
          //console.log(data);
          this.users = data.body;
        })
  }
}
</script>

<style scoped>
h1{
    color: purple;
  }
</style>
