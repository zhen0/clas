<template>
  <div>
    <h1 class="title">Flash Cards</h1>
    <p class="intro">Click on a sound to see the word and picture.</p>

    <div id="container">
      <div id="card" v-for="card in storeState.cards" v-bind:key="card.id">
        <Card :card="card" />
      </div>
    </div>
  </div>
</template>


<script>
import { store } from "../store.js";
import Card from "./Card.vue";

export default {
  name: "Memory",
  props: {},
  data() {
    return {
      storeState: store.state
    };
  },

  methods: {},
  components: {
    Card
  }
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

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
