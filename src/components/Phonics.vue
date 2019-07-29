

<template>
  <div id="container">
    <div v-if="storeState.logged" id="navBar">
      <h1 class="title">Phonics For Life</h1>
      <p class="intro">Choose An Activity:</p>

      <router-link to="/flash" class="intro">Flash Cards</router-link>
      {{" "}}
      <router-link to="/drag" class="intro">Sentence Activity</router-link>
      {{" "}}
      <router-link to="/match" class="intro">Statement /Picture Match</router-link>
    </div>
    <router-view></router-view>

    <div v-if="!storeState.logged">
      <h2>Please enter the password.</h2>
      <input v-model="message" placeholder="enter" />
      <p>You entered: {{ this.message }}</p>
      <button @click="checkPassword(message)">Enter</button>
    </div>
  </div>
</template>


<script>
import { store } from "../store.js";
// import Flash from "./Flash.vue";
// import Drag from "./Drag.vue";
export default {
  name: "Phonics",
  props: {},
  data() {
    return {
      storeState: store.state,
      message: ""
    };
  },

  methods: {
    checkPassword() {
      console.log(this.message);
      this.message === "123Abc"
        ? (this.storeState.logged = true)
        : (this.storeState.logged = false);
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");

@media screen and (max-width: 600px) {
  h1 {
    font-family: "Patrick Hand";
    font-size: 20px;
  }
  .intro {
    font-size: 15px;
    font-family: "Patrick Hand";
    padding: 2%;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
}

@media screen and (min-width: 600px) {
  h1 {
    font-family: "Patrick Hand";
  }
  .intro {
    font-size: 18px;
    font-family: "Patrick Hand";
    padding: 2%;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
  }
}

#container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0px;
  align-items: center;
}

#navBar {
  // margin: auto;
  display: flex;
  justify-content: flex-start;
  background-color: #e8eef2;
  align-self: flex-start;
  align-items: center;
  height: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
