<template>
  <div id="container">
    <div class="card">
      <p>{{pair[0].value}}</p>

      <img :src="this[pair[0].suit]">
    </div>
    <div class="card">
      <p>{{pair[1].value}}</p>

      <img :src="this[pair[1].suit]">
    </div>
  </div>
</template>


<script>
import { store } from "../store.js";

export default {
  name: "Pairs",
  props: { pair: Array },
  data() {
    return {
      storeState: store.state,

      hearts:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/heavy-black-heart_2764.png",
      diamonds:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/black-diamond-suit_2666.png",
      spades:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/black-spade-suit_2660.png",
      clubs:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/198/black-club-suit_2663.png",
      joker:
        "https://cdn1.iconfinder.com/data/icons/shadies-casino-gambling/65/Casino_gambling_cards_card_games_black_jack_poker_spades_hearts_diamonds_clubs_joker-512.png"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container {
  display: flex;
  flex-direction: row;
}
.card {
  background-color: white;
  margin: 5px;
  width: 80px;
  height: 120px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  font-family: "Playfair Display", serif;
  box-shadow: 10px 10px 10px rgb(46, 46, 46);
}

#cardTop {
  align-self: flex-start;
}
#cardBottom {
  align-self: flex-end;
}
img {
  height: 40px;
  width: 50px;
}
</style>
