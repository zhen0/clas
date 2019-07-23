<template>
  <div>
    <div v-if="card.turned && card.imgUrl" @click="turn">
      <h1 v-if="card.color" :id="card.color">{{card.front}}</h1>
      <h1 v-else id="letter">{{card.front}}</h1>
    </div>
    <div v-else-if="card.turned">
      <h1 v-if="card.color" :id="card.color">{{card.front}}</h1>
      <h1 v-else id="letter">{{card.front}}</h1>
    </div>

    <div v-else @click="turn">
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
@media screen and (max-width: 600px) {
  #letter {
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 20px;
  }

  #blue {
    color: blue;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 20px;
  }
  #red {
    color: red;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 20px;
  }
  #grey {
    color: grey;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 20px;
  }
  #orange {
    color: orange;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 18px;
  }
  #symbolImg {
    box-sizing: border-box;
    height: 35px;
    padding: 2%;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (min-width: 600px) and (max-width: 1500px) {
  #letter {
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 50px;
  }

  #blue {
    color: blue;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 50px;
  }
  #red {
    color: red;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 50px;
  }
  #grey {
    color: grey;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 50px;
  }
  #orange {
    color: orange;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 45px;
  }
  #symbolImg {
    box-sizing: border-box;
    height: 75px;
    padding: 2%;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (min-width: 1500px) {
  #letter {
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 100px;
  }
  #blue {
    color: blue;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 100px;
  }
  #red {
    color: red;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 100px;
  }
  #grey {
    color: grey;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 100px;
  }
  #orange {
    color: orange;
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 80px;
  }
  #symbolImg {
    box-sizing: border-box;
    height: 175px;
    padding: 2%;
    align-items: center;
    justify-content: center;
  }
}
</style>
