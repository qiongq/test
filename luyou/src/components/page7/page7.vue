<template>
  <div id="page7">
    <ul>
      <router-link :to="{name:'Page71Link'}">page7-1</router-link>
      <router-link :to="{name:'Page72Link'}">page7-2</router-link>
      <router-link :to="{name:'Page73Link'}">page7-3</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'page7',
}
</script>

<style scoped>

</style>
