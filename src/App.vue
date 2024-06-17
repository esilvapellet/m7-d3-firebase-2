<template>
  <NavbarComp />
  <router-view />
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue'

export default {
  name: "App",
  components: {
    NavbarComp
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    // font-weight: bold;
    // color: #2c3e50 !important;

    &.router-link-exact-active {
      font-weight: bold !important;
      color: #ffffff !important;
    }
  }
}
</style>
