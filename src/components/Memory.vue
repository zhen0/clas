

<template>
  <div>
    <button @click="shuffle">Shuffle Cards</button>
    <div v-if="shuffled" id="container">
      <div id="card" v-for="card in this.cards" v-bind:key="card.id">
        <Card :card="card"/>
      </div>
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
      cards: deck,
      shuffled: false
    };
  },
  methods: {
    shuffle() {
      for (let i = 0; i < this.cards.length; i++) {
        let j = Math.floor(Math.random() * i);
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp;

        this.shuffled = true;
      }
    }
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
