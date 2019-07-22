import deck from "./data/deck.js";
import { words1 } from "./data/sentenceActPhase2.js";
export const store = {
  state: {
    cards: deck.map(card => ({
      ...card,
      turned: true
    })),
    wordCards: words1.map(card => ({
      ...card,
      turned: true
    })),
    // cards: [
    //   {
    //     id: 1,
    //     suit: "hearts",
    //     value: 3,
    //     turned: false,
    //     unturned: true,
    //     status: "not"
    //   },
    //   {
    //     id: 2,
    //     suit: "diamonds",
    //     value: 3,
    //     turned: false,
    //     unturned: true,
    //     status: "not"
    //   }
    // ],
    shuffled: 0,
    msg: "Choose a card",
    successMsg: "Congratulations! You win.",
    counter: 0,
    selected: [],
    matched: [],
    match: false,
    pairs: false,
    stillPlaying: true,
    inGame: true
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
      this.state.match = true;
      setTimeout(boundRemoveCards, 1000);
      return true;
    } else {
      this.state.selected = [];
      this.state.match = false;
      return false;
    }
  },
  shuffle() {
    for (let i = this.state.wordCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = this.state.wordCards[i];
      this.state.wordCards[i] = this.state.wordCards[j];
      this.state.wordCards[j] = temp;
    }
  },

  removeCards() {
    this.state.cards = this.state.cards.map(card => {
      if (
        card.id === this.state.selected[0].id ||
        card.id === this.state.selected[1].id
      ) {
        card.status = "chosen";
      }
      return card;
    });
    let half = this.state.cards.length / 2;

    this.state.matched.length === half
      ? (this.state.stillPlaying = false)
      : (this.state.stillPlaying = true);
    this.state.selected = [];
  },
  redo() {
    (this.state = {
      cards: deck.map(card => ({
        ...card,
        turned: false,
        unturned: true,
        status: "not"
      })),
      // cards: [
      //   {
      //     id: 1,
      //     suit: "hearts",
      //     value: 3,
      //     turned: false,
      //     unturned: true,
      //     status: "not"
      //   },
      //   {
      //     id: 2,
      //     suit: "diamonds",
      //     value: 3,
      //     turned: false,
      //     unturned: true,
      //     status: "not"
      //   }
      // ],

      msg: "Choose a card",
      successMsg: "Congratulations! You win.",
      counter: 0,
      selected: [],
      matched: [],
      match: false,
      pairs: false,
      stillPlaying: true
    }),
      this.shuffle();
  }
};

const boundRemoveCards = store.removeCards.bind(store);
