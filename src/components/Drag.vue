

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
    <draggable id="sentence" :list="sentence" group="words">
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
#sentence {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #e8eef2;
}

.intro {
  font-size: 10px;
  font-family: "Patrick Hand";
  margin-top: 5px;
}
@media screen and (max-width: 600px) {
  .intro {
    font-size: 18px;
    font-family: "Patrick Hand";
    margin-top: 5px;
  }
  #card {
    background-color: white;
    border: orange;
    margin: 5px;
    width: 50px;
    height: 75px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
  }
}
@media screen and (min-width: 600px) and (max-width: 1500px) {
  .intro {
    font-size: 20px;
    font-family: "Patrick Hand";
    margin-top: 5px;
  }
  #card {
    background-color: white;
    border: orange;
    margin: 5px;
    width: 120px;
    height: 80px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
  }
}
@media screen and (min-width: 1500px) {
  .intro {
    font-size: 30px;
    font-family: "Patrick Hand";
    margin-top: 5px;
  }
  #card {
    background-color: white;
    border: orange;
    margin: 5px;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
  }
}

.title {
  font-family: "Patrick Hand";
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
