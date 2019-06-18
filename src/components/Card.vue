

<template>
  <div id="card">
    <p>{{ card.suit }}{{card.value}}</p>

    <img :src="`${card.suit}`">
  </div>
</template>


<script>
export default {
  name: "Card",
  props: { card: Object },
  data() {
    return {
      hearts:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/heavy-black-heart_2764.png",
      diamonds:
        "https://previews.123rf.com/images/stockgiu/stockgiu1807/stockgiu180703240/105877705-doodle-diamonds-casino-game-card-symbol-vector-illustration.jpg"
    };
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

  padding: 5px;
  font-family: "Playfair Display", serif;
  box-shadow: 10px 10px 10px rgb(46, 46, 46);
}
img {
  height: 40px;
  width: 50px;
}
</style>
