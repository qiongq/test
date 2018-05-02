<template>
  <div id="show-blogs" v-theme:column="'wide'">
      <h1>博客总览</h1>
      <input type="text" placeholder="搜索" v-model="search"/>
      <div class="single-blog" v-for="blog in filteredBlogs">
          <router-link :to="'/blog/'+ blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
          <article>
              {{blog.content | snippet}}
          </article>
      </div>
  </div>
</template>

<script>
export default {
  name: 'show-blogs',
  data () {
      return {
          blogs:[],
          search:''
      }
  },
  created () {
      /* this.$http.get('http://jsonplaceholder.typicode.com/posts')
                .then(function (data) {
                    //console.log(data);
                    this.blogs = data.body.slice(0,10);
                    console.log(this.blogs);
                  }) */
        /* this.$http.get('./../static/post.json')//当前需要请求的json文件只能放在static文件夹中
                .then(function (data) {
                    //console.log(data);
                    this.blogs = data.body.slice(0,10);
                    //console.log(this.blogs);
                  }) */
            this.$http.get('https://vueblog-692b6.firebaseio.com/posts.json')
                .then(function (data) {
                    //console.log(data.json());
                    return data.json()
                  })
                .then(function(data) {
                    var blogsArray = [];
                    for(let key in data){
                        //console.log(key);
                        //console.log(data[key]);
                        data[key].id = key;
                        blogsArray.push(data[key])
                    }
                    //console.log(blogsArray);
                    this.blogs = blogsArray;
                    console.log(this.blogs);
                })
  },
  computed: {
      filteredBlogs:function(){
          return this.blogs.filter((blog) =>{
              return blog.title.match(this.search);
          })
      }
  },
  filters: {//局部
      /* "to-uppercase":function (value) {
          return value.toUpperCase();
        } */
        toUppercase(value){
            return value.toUpperCase();
        }
  },
  directives: {
    'rainbow':{
        bind(el, binding, vnode) {
            el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
    }
  }
  
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 0 8px;
    width: 100%;
    box-sizing: border-box;
}

</style>
