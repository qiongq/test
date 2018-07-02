<template>
  <div id="page10">
    <ul>
      <router-link :to="{name:'Page101Link'}">page10-1</router-link>
      <router-link :to="{name:'Page102Link'}">page10-2</router-link>
      <router-link :to="{name:'Page103Link'}">page10-3</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'page10',
}
</script>

<style scoped>

</style>
