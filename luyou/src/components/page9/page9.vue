<template>
  <div id="page9">
    <ul>
      <router-link :to="{name:'Page91Link'}">page9-1</router-link>
      <router-link :to="{name:'Page92Link'}">page9-2</router-link>
      <router-link :to="{name:'Page93Link'}">page9-3</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'page9',
}
</script>

<style scoped>

</style>
