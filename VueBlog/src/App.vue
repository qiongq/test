<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog"
import ShowBlogs from "./components/ShowBlogs"
import BlogHeader from "./components/BlogHeader"


export default {
  name: 'App',
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader
  }
}
</script>

<style>

</style>
