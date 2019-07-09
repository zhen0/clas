

<template>
  <div>
    <h1 class="title">Phonics for Life</h1>
    <p class="intro">Choose An Activity.</p>
    <div>
      <router-link to="/flash">Flash Cards</router-link>
      {{" "}}
      <router-link to="/drag">Sentence Activity</router-link>

      <router-view></router-view>
    </div>
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
h3 {
  margin: 40px 0 0;
}

#container {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e8eef2;
}

.intro {
  font-size: 18px;
}
</style>
