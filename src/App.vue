<template>
  <div id="app" class="app">
    <img class="logo" alt="Vue logo" src="./assets/logomark-color.svg">
    <Memory try1="This is the new message"/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
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
