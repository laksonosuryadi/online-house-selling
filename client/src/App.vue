<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import House from './components/House.vue'
import Houseform from './components/Houseform.vue'
export default {
  components: {
    House,
    Houseform,
    Navbar
  }
}
</script>

<style>

</style>
