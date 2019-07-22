

<template>
  <div id="container">
    <div id="navBar">
      <h1 class="title">Phonics For Life</h1>
      <p class="intro">Choose An Activity:</p>

      <router-link to="/flash" class="intro">Flash Cards</router-link>
      {{" "}}
      <router-link to="/drag" class="intro">Sentence Activity</router-link>
      {{" "}}
      <router-link to="/match" class="intro">Statement/Picture Match</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
import { store } from "../store.js";
// import Flash from "./Flash.vue";
// import Drag from "./Drag.vue";
export default {
  name: "Phonics",
  props: {},
  data() {
    return {
      storeState: store.state
    };
  },

  methods: {},
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");
h1 {
  font-family: "Patrick Hand";
}
#container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0px;
  align-items: center;
}

#navBar {
  // margin: auto;
  display: flex;
  justify-content: flex-start;
  background-color: #e8eef2;
  align-self: flex-start;
  align-items: center;
  height: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.intro {
  font-size: 18px;
  font-family: "Patrick Hand";
  padding: 2%;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 0px;
}
</style>
