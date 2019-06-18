

<template>
  <div class="hello">
    <h1>{{ try1 }}</h1>
    <p>Getting there....</p>
    <ul id="cards">
      <li v-for="(card, index) in this.cards" v-bind:key="index">{{ card.suit }}</li>
    </ul>

    <p>
      '♠': 'black',
      '♣': 'black',
      '♦': 'red',
      '♥': 'red',
    </p>
    <div class="title">{{this.cards2}}</div>
  </div>
</template>


<script>
import deck from "../data/deck.js";
const cards2 = deck[0].suit;

export default {
  name: "Memory",
  props: {
    try1: String
  },
  data() {
    return {
      cards2: cards2,
      cards: deck,
      title: "Check me"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
