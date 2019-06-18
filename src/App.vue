<template>
  <div id="app" class="app">
    <Memory/>
  </div>
</template>

<script>
import Memory from "./components/Memory.vue";

export default {
  name: "app",
  components: {
    Memory
  }
};
</script>

<style lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3rem;
}

.logo {
  height: 15rem;
}
</style>
