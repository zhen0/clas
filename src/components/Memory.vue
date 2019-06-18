

<template>
  <div id="container">
    <div id="card" v-for="card in this.cards" v-bind:key="card.id">
      <p>{{ card.suit }}{{card.value}}</p>
      <p>
        <img :src="`${card.suit}`">
      </p>
    </div>
  </div>
</template>


<script>
import deck from "../data/deck.js";

export default {
  name: "Memory",
  props: {},
  data() {
    return {
      hearts:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/heavy-black-heart_2764.png",
      diamonds:
        "https://previews.123rf.com/images/stockgiu/stockgiu1807/stockgiu180703240/105877705-doodle-diamonds-casino-game-card-symbol-vector-illustration.jpg",
      cards: deck
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
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
#container {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-items: center;
}

#card {
  background-color: white;
  margin: 20px;
  width: 350px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  font-family: "Playfair Display", serif;
  box-shadow: 10px 10px 10px rgb(46, 46, 46);
}
img {
  height: 200px;
  width: 350px;
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
