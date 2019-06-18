

<template>
  <div id="container">
    <div id="card" v-for="card in this.cards" v-bind:key="card.id">
      <Card :card="card"/>
    </div>
  </div>
</template>


<script>
import deck from "../data/deck.js";
import Card from "./Card.vue";

export default {
  name: "Memory",
  props: {},
  data() {
    return {
      cards: deck
    };
  },
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

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
