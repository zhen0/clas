<template>
  <div id="container">
    <div id="card">
      <p>{{pair[0].value}}</p>

      <img :src="this[pair[0].suit]">
    </div>
    <div id="card">
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
        "https://previews.123rf.com/images/stockgiu/stockgiu1807/stockgiu180703240/105877705-doodle-diamonds-casino-game-card-symbol-vector-illustration.jpg",
      spades:
        "https://banner2.kisspng.com/20180408/ajw/kisspng-ace-of-spades-drawing-ace-card-5aca5e84c20da9.0692545715232119087949.jpg",
      clubs:
        "https://cdn3.iconfinder.com/data/icons/game-icon-set/50/clubs-512.png",
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
#card {
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
img {
  height: 40px;
  width: 50px;
}
</style>
