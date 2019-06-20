import deck from "./data/deck.js";

export const store = {
  state: {
    cards: deck.map(card => ({ ...card, turned: false, unturned: true })),
    shuffled: 0,
    msg: "Choose a card",
    counter: 0,
    selected: [],
    matched: [],
    match: false
  },
  turnCards() {
    this.state.cards = this.state.cards.map(card => ({
      ...card,
      turned: false,
      unturned: true
    }));
  },
  setSelected(card) {
    this.state.selected.push(card);
  },
  checkMatch() {
    console.log("selected in store", this.state.selected);
    let counter = 0;
    if (this.state.selected[0].value === this.state.selected[1].value) {
      counter++;
    }
    if (
      this.state.selected[0].suit === "hearts" &&
      this.state.selected[1].suit === "diamonds"
    ) {
      counter++;
    }
    if (
      this.state.selected[0].suit === "diamonds" &&
      this.state.selected[1].suit === "hearts"
    ) {
      counter++;
    }
    if (
      this.state.selected[0].suit === "clubs" &&
      this.state.selected[1].suit === "spades"
    ) {
      counter++;
    }
    if (
      this.state.selected[0].suit === "spades" &&
      this.state.selected[1].suit === "clubs"
    ) {
      counter++;
    }
    if (
      this.state.selected[0].suit === "joker" &&
      this.state.selected[1].suit === "joker"
    ) {
      counter++;
    }

    if (counter > 1) {
      let won = [...this.state.selected];
      this.state.matched.push(won);
      this.state.cards = this.state.cards.filter(
        card =>
          card.id !== this.state.selected[0].id &&
          card.id !== this.state.selected[1].id
      );
      this.state.selected = [];
      this.state.match = true;
    } else {
      this.state.selected = [];
      this.state.match = false;
    }
  },
  shuffle() {
    for (let i = this.state.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.state.cards[i];
      this.state.cards[i] = this.state.cards[j];
      this.state.cards[j] = temp;
    }
  }
};
