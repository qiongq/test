<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './components/Head'

export default {
  name: 'app',
  components: {
    'app-header':Head
  }
}
</script>

<style>

</style>
