

<template>
  <div>
    <div v-if="card.turned" @click="turn" id="card">
      <h1 id="letter">{{card.front}}</h1>
    </div>
    <div v-else @click="turn" id="card">
      <div id="word">
        <p id="sound">{{card.sound}}</p>
        <p>{{card.word}}</p>
      </div>
      <img id="symbolImg" :src="card.imgUrl" />
    </div>
  </div>
</template>


<script>
import { store } from "../store.js";

export default {
  name: "Card",
  props: { card: Object },
  data() {
    return {
      isChosen: this.card.suit === "chosen" ? true : false,
      storeState: store.state
    };
  },
  methods: {
    turn() {
      this.card.turned = !this.card.turned;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");
#card {
  background-color: white;
  border: orange;
  margin: 5px;
  width: 150px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  font-family: "Patrick Hand", "Comic Sans MS";
  box-shadow: 10px 10px 10px rgb(46, 46, 46);
}
#letter {
  font-family: "Patrick Hand", Comic Sans MS;
  font-size: 50px;
}
#word {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  box-sizing: border-box;
  width: 90%;
  height: 30%;
  border: solid orange 5px;
  padding: 2%;
  justify-content: center;
  align-items: center;
  border-bottom: 0px;
  font-family: "Patrick Hand", Comic Sans MS;
}

#sound {
  color: red;
  font-size: 30px;
  font-family: "Patrick Hand", Comic Sans MS;
}

#symbolImg {
  height: 150px;
  width: 140px;
  box-sizing: border-box;
  width: 90%;
  height: 50;
  border: solid orange 5px;
  padding: 2%;
  justify-content: center;
}
</style>
