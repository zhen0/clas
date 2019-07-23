<template>
  <div>
    <div v-if="card.turned" @click="turn" id="card">
      <img id="symbolImg" :src="card.imgUrl" />
    </div>
    <div v-else @click="turn" id="card">
      <p id="sound">{{card.word}}</p>
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
      storeState: store.state
    };
  },
  methods: {
    turn() {
      this.card.turned = !this.card.turned;
      store.state.pic = this.card.word;
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
    height: 80px;
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
    font-size: 30px;
    font-family: "Patrick Hand", Comic Sans MS;
  }

  #symbolImg {
    box-sizing: border-box;
    width: 90%;
    height: 90%;
    border: solid orange 5px;
    padding: 2%;
    justify-content: center;
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

  #symbolImg {
    // box-sizing: border-box;
    width: 90%;
    height: 90%;

    padding: 2%;
    justify-content: center;
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
    font-size: 150px;
    font-family: "Patrick Hand", Comic Sans MS;
  }

  #symbolImg {
    box-sizing: border-box;
    width: 90%;
    height: 90%;
    border: solid orange 5px;
    padding: 2%;
    justify-content: center;
  }
}
</style>