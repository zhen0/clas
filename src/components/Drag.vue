

<template>
  <div>
    <h1 class="title">Sound Cards</h1>
    <p class="intro">Click on a sound to see the word and picture.</p>
    <h3 v-if="storeState.stillPlaying" id="stateMsg">{{this.storeState.msg}}</h3>
    <h1 id="success" v-else>{{this.storeState.successMsg}}</h1>
    <draggable @start="drag=true" @end="drag=false" id="drag">
      <div id="card" v-for="card in storeState.cards" v-bind:key="card.id">
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
    draggable
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
#stateMsg {
  padding-bottom: 10px;
  padding-top: 5px;
  margin-top: 20px;
}
#drag {
  display: flex;
  flex-wrap: wrap;
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
