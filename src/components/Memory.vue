

<template>
  <div>
    <h1 class="title">Welcome to Memory</h1>
    <p
      class="intro"
    >Click on a card to turn it over. Try to find two cards of the same color and value. You can only turn two cards at a time. You win if you find all the matching pairs.</p>
    <h3 v-if="storeState.stillPlaying" id="stateMsg">{{this.storeState.msg}}</h3>
    <h1 id="success" v-else>{{this.storeState.successMsg}}</h1>

    <button @click="submit">Submit Cards</button>
    <button id="viewPairs" @click="view">View/Hide My Pairs</button>
    <button @click="redo">Start a New Game</button>
    <div v-if="storeState.pairs" id="pairsOuter">
      <div v-for="(pair, index) in storeState.matched" v-bind:key="index" id="pairsBox">
        <Pairs :pair="pair"/>
      </div>
    </div>
    <div id="container">
      <div id="card" v-for="card in storeState.cards" v-bind:key="card.id">
        <Card :card="card"/>
      </div>
    </div>
  </div>
</template>


<script>
import { store } from "../store.js";
import Card from "./Card.vue";
import Pairs from "./Pairs.vue";

export default {
  name: "Memory",
  props: {},
  data() {
    return {
      storeState: store.state
    };
  },

  created() {
    store.shuffle();
  },
  methods: {
    view() {
      this.storeState.pairs = !this.storeState.pairs;
    },
    redo() {
      this.storeState.counter = 0;
      store.redo();
      this.storeState = store.state;
    },
    submit() {
      if (this.storeState.counter < 2) {
        this.storeState.msg = "Please click on 2 cards before you submit";
      } else {
        if (this.storeState.match) {
          this.storeState.msg = "Congratulations.  Those cards match";
          this.storeState.counter = 0;
        } else {
          this.storeState.msg = "Sorry, not a match";
          store.turnCards();
          this.storeState.counter = 0;
          setTimeout(() => {
            this.storeState.msg = "Choose a card";
          }, 3000);
        }
      }
    }
  },
  components: {
    Card,
    Pairs
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
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
#pairsOuter {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  align-items: flex-start;
}
#pairsBox {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
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
