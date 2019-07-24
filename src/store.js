export const store = {
  state: {
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
