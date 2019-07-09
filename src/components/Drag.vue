

<template>
  <div>
    <h1 class="title">Sentence Actvity</h1>
    <p class="intro">Move the cards to make a sentence</p>

    <draggable @start="drag=true" @end="drag=false" id="drag">
      <div id="card" v-for="card in storeState.wordCards" v-bind:key="card.id">
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

#drag {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
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
