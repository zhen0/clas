

<template>
  <div>
    <h1 class="title">Sentence Actvity</h1>
    <p class="intro">Look at the cards below and think what sentences you could make.</p>

    <draggable id="container" :list="storeState.wordCards" group="words">
      <div v-for="card in storeState.wordCards" v-bind:key="card.id" id="card">
        <SentenceCard :card="card" />
      </div>
    </draggable>
    <p
      class="intro"
    >Drag the words onto the fullstop to move them into your sentence. Then you can move them to left or right to put your sentence in order.</p>
    <draggable id="container" :list="sentence" group="words">
      <div v-for="card in sentence" v-bind:key="card.id" id="card">
        <SentenceCard :card="card" />
      </div>
    </draggable>
  </div>
</template>


<script>
import { store } from "../store.js";
import draggable from "vuedraggable";
import SentenceCard from "./SentenceCards.vue";

export default {
  name: "Drag",
  props: {},
  data() {
    return {
      storeState: store.state,
      sentence: [{ turned: true, front: "." }]
    };
  },

  created() {
    store.shuffle();
  },
  methods: {},
  components: {
    SentenceCard,
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
