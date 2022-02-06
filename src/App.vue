<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-link to="/projects"></router-link>
    <router-link to="/contact"></router-link>

    <router-view/>
  </div>
</template>

<script>
// import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    // Home,
  }
}
</script>

<style>

</style>
