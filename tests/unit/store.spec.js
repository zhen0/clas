import { store } from "../../src/store";

test("state.match is false when two card values are not the same", () => {
  store.setSelected({ suit: "hearts", value: 12 });
  store.setSelected({ suit: "diamonds", value: 11 });
  store.checkMatch();
  expect(store.state.match).toBe(false);
});
test("check match is false when two cards colors are not the same", () => {
  store.setSelected({ suit: "clubs", value: 12 });
  store.setSelected({ suit: "diamonds", value: 12 });
  store.checkMatch();
  expect(store.state.match).toBe(false);
});

test("check match is true when two cards values and colors are the same", () => {
  store.setSelected({ suit: "hearts", value: 12 });
  store.setSelected({ suit: "diamonds", value: 12 });
  store.checkMatch();
  expect(store.state.match).toBe(true);
});
