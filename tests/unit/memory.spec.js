import { shallowMount } from "@vue/test-utils";

import Memory from "@/components/Memory.vue";
const stateMessage = "Choose a card";
const successMessage = "Congratulations! You win.";
const title = "Welcome to Memory";
const intro =
  "Click on a card to turn it over. Try to find two cards of the same color and value. You can only turn two cards at a time. You win if you find all the matching pairs.";
describe("Memory.vue", () => {
  it("is a component", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("shows the page title", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.find(".title").text()).toMatch(title);
  });
  it("shows the intro", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.find(".intro").text()).toMatch(intro);
  });
  it("shows the state message", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.find("#stateMsg").text()).toMatch(stateMessage);
  });
  it("does not show the success message when the player has not got all matching pairs", () => {
    const wrapper = shallowMount(Memory);

    expect(wrapper.find("#success").exists()).toBe(false);
  });
  it("shows the success message when the player has all matching pairs", () => {
    const wrapper = shallowMount(Memory);
    wrapper.setData({ storeState: { stillPlaying: false } });
    expect(wrapper.find("#success").text()).toMatch(successMessage);
  });
  it("does not show the matched pairs by default", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.find("#pairsOuter").exists()).toBe(false);
  });
  it("when show pairs button is clicked, matched pairs are show", () => {
    const wrapper = shallowMount(Memory);
    wrapper.find("#viewPairs").trigger("click");
    expect(wrapper.find("#pairsOuter").exists()).toBe(true);
  });
});
