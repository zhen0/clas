import deck from "./data/deck.js";

export const store = {
  state: {
    cards: deck.map(card => ({ ...card, turned: false, unturned: true })),
    shuffled: 0,
    msg: "",
    counter: 0
  },
  turnCards() {
    this.state.cards = deck.map(card => ({
      ...card,
      turned: false,
      unturned: true
    }));
  }
};
