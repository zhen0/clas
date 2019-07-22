<template>
  <div id="app" class="app">
    <Phonics />
  </div>
</template>

<script>
import Phonics from "./components/Phonics.vue";

export default {
  name: "app",
  components: {
    Phonics
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

  background-color: #e8eef2;
  margin-top: 0px;
}
</style>
