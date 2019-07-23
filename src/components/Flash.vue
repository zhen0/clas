<template>
  <div>
    <h1 class="title">Flash Cards</h1>
    <h3 class="title">Which set of flash cards do you want?</h3>
    <div id="container">
      <div class="paper" @click="setSounds('one')">Set 1 (s, a, t, p)</div>
      <div class="paper" @click="setSounds('two')">Set 2 (i, n, m, d)</div>
      <div class="paper" @click="setSounds('three')">Set 3 (g, o, c, k)</div>
      <div class="paper" @click="setSounds('four')">Set 4 (ck, e, u, r)</div>
    </div>
    <p class="intro">Click on a sound to see the word and picture.</p>

    <div id="container">
      <div id="card" v-for="card in this.soundsA" v-bind:key="card.id">
        <Card :card="card" />
      </div>
    </div>
  </div>
</template>


<script>
import { sounds } from "../data/flashPhase2.js";
import Card from "./Card.vue";

export default {
  name: "Memory",
  props: {},
  data() {
    return {
      soundsA: sounds.one
    };
  },

  methods: {
    setSounds(a) {
      this.soundsA = sounds[a];
    }
  },
  components: {
    Card
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
.paper {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
    0 20px 1px -9px rgba(0, 0, 0, 0.15);
  padding: 10px;
  margin: 15px;
  width: 20%;
  border-radius: 10px;
  font-family: "Patrick Hand";
}
</style>
