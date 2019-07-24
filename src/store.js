import { stats1 } from "./data/statementsPhase2.js";
import { pics1 } from "./data/statPicsPhase2.js";

export const store = {
  state: {
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
