<template>
  <div v-if="storeState.logged">
    <div v-if="card.turned" @click="turn" id="card"></div>
    <div v-else @click="turn" id="card">
      <p id="sound">{{card.front}}</p>
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
      store.state.statement = this.card.answer;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");

@media screen and (max-width: 600px) {
  #card {
    background-color: white;
    margin: 5px;
    width: 80px;
    height: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 5px;
    padding-right: 5px;
    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
    flex: 0 1 auto;
  }

  #sound {
    color: black;
    font-size: 25px;
    font-family: "Patrick Hand", Comic Sans MS;
  }
}

@media screen and (min-width: 600px) and (max-width: 1500px) {
  #card {
    background-color: white;
    border: orange;
    margin: 5px;
    width: 150px;
    height: 150px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
    flex: 1 1 auto;
  }

  #sound {
    color: black;
    font-size: 30px;
    font-family: "Patrick Hand", Comic Sans MS;
  }
}
@media screen and (min-width: 1500px) {
  #card {
    background-color: white;
    border: orange;
    margin: 5px;
    width: 500px;
    height: 500px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
    flex: 1 1 auto;
  }
  #sound {
    color: black;
    font-size: 100px;
    font-family: "Patrick Hand", Comic Sans MS;
  }
}
</style>