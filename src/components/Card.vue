

<template>
  <div>
    <div v-if="card.unturned " @click="turn" id="card">
      <h1 id="letter">{{card.front}}</h1>
    </div>
    <div v-if="card.turned " @click="turn" id="card">
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
      this.card.unturned = this.card.unturned ? false : true;
      this.card.turned = this.card.turned ? false : true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#card {
  background-color: white;
  border: orange;
  margin: 5px;
  width: 200px;
  height: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  font-family: "Playfair Display", serif;
  box-shadow: 10px 10px 10px rgb(46, 46, 46);
}
#letter {
  font-family: Comic Sans MS;
  font-size: 90px;
}
#word {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  box-sizing: border-box;
  width: 95%;
  height: 30%;
  border: solid orange 5px;
  padding: 5px;
  justify-content: center;
  border-bottom: 0px;
  font-family: Comic Sans MS;
}
#sound {
  color: red;
  font-size: 30px;
  font-family: Comic Sans MS;
}

#symbolImg {
  height: 150px;
  width: 140px;
  box-sizing: border-box;
  width: 95%;
  height: 50;
  border: solid orange 5px;
  padding: 15px;
  justify-content: center;
}
</style>
