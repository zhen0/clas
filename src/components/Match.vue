<template>
  <div>
    <h1 class="title">Statement Picture Match</h1>
    <p class="intro">Click on a card and read the statement.</p>

    <div id="container" :list="storeState.statementCards" group="words">
      <div v-for="card in storeState.statementCards" v-bind:key="card.id" id="card">
        <StatementCard :card="card" />
      </div>
    </div>
    <p
      class="intro"
    >Choose the picture that matches your statement. Click on the picture to see the word for that picture.</p>
    <div id="sentence" :list="storeState.pictureCards" group="words">
      <div v-for="card in storeState.pictureCards" v-bind:key="card.id" id="card">
        <PictureCard :card="card" />
      </div>
    </div>
    <button class="button">Click here to check if you were correct!</button>
  </div>
</template>


<script>
import { store } from "../store.js";
import PictureCard from "./PictureCard.vue";
import StatementCard from "./StatementCard.vue";

export default {
  name: "Match",
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
    StatementCard,
    PictureCard
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
.button {
  font-size: 20px;
  font-family: "Patrick Hand";
  margin-top: 5px;
  background-color: purple;
  box-shadow: 10px 10px 10px rgb(46, 46, 46);
  border-radius: 10px;
  padding: 10px;
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