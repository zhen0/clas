import { shallowMount } from "@vue/test-utils";

import Memory from "@/components/Memory.vue";
const stateMessage = "Choose a card";
const successMessage = "Congratulations! You win.";
describe("Memory.vue", () => {
  it("is a component", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("shows the state message", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.find("p").text()).toMatch(stateMessage);
  });
  it("does not show the success message when the player has not got all matching pairs", () => {
    const wrapper = shallowMount(Memory);

    expect(wrapper.find("h1").exists()).toBe(false);
  });
  it("shows the success message when the player has all matching pairs", () => {
    const wrapper = shallowMount(Memory);
    wrapper.setData({ storeState: { stillPlaying: false } });
    expect(wrapper.find("h1").text()).toMatch(successMessage);
  });
  it("does not show the matched pairs by default", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.find("#pairsOuter").exists()).toBe(false);
  });
  it("when show pairs button is clicked, matched pairs are show", () => {
    const wrapper = shallowMount(Memory);
    wrapper.findAll("button").trigger("click");
    expect(wrapper.find("#pairsOuter").exists()).toBe(true);
  });
});
