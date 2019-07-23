import deck from "./data/deck.js";
import { words1 } from "./data/sentenceActPhase2.js";
import { stats1 } from "./data/statementsPhase2.js";
import { pics1 } from "./data/statPicsPhase2.js";

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
    statementCards: stats1.map(card => ({
      ...card,
      turned: true
    })),
    pictureCards: pics1.map(card => ({
      ...card,
      turned: true
    })),
    statement: "y",
    pic: "x",
    message: "Click here to check your answer!"
  },
  match() {
    this.state.pic === this.state.statement
      ? (this.state.message = "Correct!")
      : (this.state.message = "Try again!");
    return this.state.message;
  }
};
