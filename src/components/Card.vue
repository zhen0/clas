

<template>
  <div>
    <div v-if="card.turned" id="card">
      <div @click="turn">
        <h1 id="letter">{{card.front}}</h1>
      </div>
      <i class="fas fa-volume-up" @click="soundPlay(card.play)"></i>
    </div>
    <div v-else-if="card.end" id="card">
      <div id="word">
        <div id="playWord" />
        <div id="innerWord" @click="turn">
          <p>{{card.word}}</p>
          <p id="sound">{{card.sound}}</p>
        </div>
        <div id="playWord"></div>
        <i class="fas fa-volume-up" @click="soundPlay(card.play2)"></i>
      </div>
      <img id="symbolImg" :src="card.imgUrl" @click="turn" />
    </div>
    <div v-else-if="card.mid1" id="card">
      <div id="word">
        <div id="playWord" />
        <div id="innerWord" @click="turn">
          <p>{{card.word1}}</p>
          <p id="sound">{{card.sound}}</p>
          <p>{{card.word2}}</p>
        </div>

        <div id="playWord">
          <i class="fas fa-volume-up" @click="soundPlay(card.play2)"></i>
        </div>
      </div>
      <img id="symbolImg" :src="card.imgUrl" @click="turn" />
    </div>
    <div v-else-if="card.mid2" id="card">
      <div id="word">
        <div id="playWord" />
        <div id="innerWord" @click="turn">
          <p id="sound">{{card.sound1}}</p>
          <p>{{card.word1}}</p>
          <p id="sound">{{card.sound2}}</p>
          <p>{{card.word2}}</p>
        </div>
      </div>
      <div id="playWord">
        <i class="fas fa-volume-up" @click="soundPlay(card.play2)"></i>
      </div>
      <img id="symbolImg" :src="card.imgUrl" @click="turn" />
    </div>
    <div v-else-if="card.mid3" id="card">
      <div id="word">
        <div id="playWord" />
        <div id="innerWord" @click="turn">
          <p>{{card.word1}}</p>
          <p id="sound">{{card.sound1}}</p>

          <p>{{card.word2}}</p>
          <p id="sound">{{card.sound2}}</p>
        </div>
        <div id="playWord">
          <i class="fas fa-volume-up" @click="soundPlay(card.play2)"></i>
        </div>
      </div>
      <img id="symbolImg" :src="card.imgUrl" @click="turn" />
    </div>
    <div v-else id="card">
      <div id="word">
        <div id="playWord" />
        <div id="innerWord" @click="turn">
          <p id="sound">{{card.sound}}</p>
          <p>{{card.word}}</p>
        </div>
        <div id="playWord">
          <i class="fas fa-volume-up" @click="soundPlay(card.play2)"></i>
        </div>
      </div>
      <img id="symbolImg" :src="card.imgUrl" @click="turn" />
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
    },
    soundPlay(sound) {
      {
        const audio = new Audio(sound);
        audio.play();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");
i {
  font-size: 50px;
  margin: 20px;
}
#innerWord {
  display: flex;
  flex-direction: row;
  align-self: center;
  flex: 1;
}
#playWord {
  flex: 1;
}
@media screen and (max-width: 600px) {
  #card {
    background-color: white;
    border: orange;
    margin: 2px;
    width: 300px;
    height: 550px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 2px;
    padding-right: 2px;
    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
    flex: 1 1 auto;
    margin-bottom: 25px;
  }
  #letter {
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 150px;
  }
  #word {
    display: flex;
    flex-direction: row;
    font-size: 80px;
    box-sizing: border-box;
    width: 92%;
    height: 30%;
    border: solid orange 5px;
    padding: 2%;
    justify-content: space evenly;

    border-bottom: 0px;
    font-family: "Patrick Hand", Comic Sans MS;
  }

  #sound {
    color: red;
    font-size: 80px;
    font-family: "Patrick Hand", Comic Sans MS;
  }

  #symbolImg {
    box-sizing: border-box;
    width: 92%;
    height: 50%;
    border: solid orange 5px;
    padding: 2%;
    justify-content: center;
  }
}

@media screen and (min-width: 600px) and (max-width: 1500px) {
  #card {
    background-color: white;
    border: orange;
    margin: 25px;
    width: 700px;
    height: 550px;
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
  #button {
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 100px;
  }
  #letter {
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 250px;
    margin: 0px;
  }
  #word {
    display: flex;
    flex-direction: row;
    font-size: 100px;
    box-sizing: border-box;
    width: 90%;
    height: 30%;
    border: solid orange 5px;
    padding: 2%;
    justify-content: space around;
    align-items: center;
    border-bottom: 0px;
    font-family: "Patrick Hand", Comic Sans MS;
  }

  #sound {
    color: red;

    font-family: "Patrick Hand", Comic Sans MS;
  }

  #symbolImg {
    height: 150px;
    width: 140px;
    box-sizing: border-box;
    width: 90%;
    height: 50%;
    border: solid orange 5px;
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
    height: 800px;
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
  #letter {
    font-family: "Patrick Hand", Comic Sans MS;
    font-size: 300px;
  }
  #word {
    display: flex;
    flex-direction: row;
    font-size: 150px;
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
    font-size: 150px;
    font-family: "Patrick Hand", Comic Sans MS;
  }

  #symbolImg {
    box-sizing: border-box;
    width: 90%;
    height: 50%;
    border: solid orange 5px;
    padding: 2%;
    justify-content: center;
  }
}
</style>
