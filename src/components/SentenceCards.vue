<template>
  <div>
    <div v-if="card.turned" @click="turn">
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

#letter {
  font-family: "Patrick Hand", Comic Sans MS;
  font-size: 50px;
}

#sound {
  color: red;
  font-size: 30px;
  font-family: "Patrick Hand", Comic Sans MS;
}

#blue {
  color: blue;
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
</style>
