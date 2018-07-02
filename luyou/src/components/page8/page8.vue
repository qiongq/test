<template>
  <div id="page8">
    <ul>
      <router-link :to="{name:'Page81Link'}">page8-1</router-link>
      <router-link :to="{name:'Page82Link'}">page8-2</router-link>
      <router-link :to="{name:'Page83Link'}">page8-3</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'page8',
}
</script>

<style scoped>

</style>
