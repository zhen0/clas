

<template>
  <div>
    <div v-if="card.unturned " @click="turn" id="card">
      <img id="blankImg" :src="this[card.status]">
    </div>
    <div v-if="card.turned " id="card">
      <p id="cardTop">{{card.value}}</p>
      <img id="symbolImg" :src="this[card.suit]">
      <p id="cardBottom">{{card.value}}</p>
    </div>
  </div>
</template>


<script>
import { store } from "../store.js";
import { setTimeout } from "timers";
export default {
  name: "Card",
  props: { card: Object },
  data() {
    return {
      isChosen: this.card.suit === "chosen" ? true : false,
      storeState: store.state,

      hearts:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/heavy-black-heart_2764.png",
      diamonds: "http://clipart-library.com/images/AcbKbk8oi.png",
      spades: "http://clipart-library.com/images/8TAEAqdTa.png",
      clubs: "http://clipart-library.com/images/rcLxd7Xc8.png",
      joker:
        "https://cdn1.iconfinder.com/data/icons/shadies-casino-gambling/65/Casino_gambling_cards_card_games_black_jack_poker_spades_hearts_diamonds_clubs_joker-512.png",
      chosen:
        "https://dictionary.cambridge.org/images/thumb/cross_noun_002_09265.jpg?version=4.0.82",
      not:
        "https://images.blogthings.com/thejapanesepatterntest/japanese-pattern-1.png"
    };
  },
  methods: {
    turn() {
      this.storeState.counter++;
      if (this.storeState.counter <= 2) {
        this.card.unturned = false;
        this.card.turned = true;
        store.setSelected(this.card);
      }
      if (this.storeState.counter === 2) {
        this.checkAndUpdate();
      }
      if (this.storeState.counter > 2) {
        this.storeState.msg = "Select only two cards per turn!";
        setTimeout(this.update, 1000);
      }
    },

    async checkAndUpdate() {
      await store.checkMatch();
      if (this.storeState.match) {
        this.storeState.msg = "Congratulations.  Those cards match";
        setTimeout(this.update, 2000);
      } else {
        this.storeState.msg = "Sorry, no match.";
        setTimeout(this.update, 2000);
      }
    },
    update() {
      this.storeState.counter = 0;
      store.turnCards();
      this.storeState.msg = "Choose a card";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#card {
  background-color: white;
  margin: 5px;
  width: 80px;
  height: 120px;
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

#cardTop {
  align-self: flex-start;
}
#cardBottom {
  align-self: flex-end;
}
#blankImg {
  height: 90%;
  width: 80%;
  align-self: center;
}
#symbolImg {
  height: 65px;
  width: 60px;
  flex-grow: 2;
}
</style>
