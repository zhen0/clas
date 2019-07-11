

<template>
  <div>
    <h1 class="title">Sentence Actvity</h1>
    <p class="intro">Move the cards to make a sentence</p>

    <draggable @start="drag=true" @end="drag=false" delay:500 id="container">
      <div v-for="card in storeState.wordCards" v-bind:key="card.id" id="card">
        <Card :card="card" />
      </div>
    </draggable>
  </div>
</template>


<script>
import { store } from "../store.js";
import draggable from "vuedraggable";
import Card from "./Card.vue";

export default {
  name: "Drag",
  props: {},
  data() {
    return {
      storeState: store.state
    };
  },

  created() {
    store.shuffle();
  },
  methods: {},
  components: {
    Card,
    draggable
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");
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
  font-family: "Patrick Hand";
}

.title {
  font-family: "Patrick Hand";
}
</style>
