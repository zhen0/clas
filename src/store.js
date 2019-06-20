import deck from "./data/deck.js";

export const store = {
  state: {
    cards: deck.map(card => ({ ...card, turned: false, unturned: true })),
    shuffled: 0,
    msg: "",
    counter: 0,
    selected: []
  },
  turnCards() {
    this.state.cards = deck.map(card => ({
      ...card,
      turned: false,
      unturned: true
    }));
  },
  setSelected(card) {
    this.state.selected.push(card);
  },
  checkMatch() {
    console.log(this.state.selected);
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
    console.log("counter", counter);
    this.state.selected = [];
    if (counter > 1) {
      return true;
    } else {
      return false;
    }
  }
};
