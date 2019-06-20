import { shallowMount } from "@vue/test-utils";

import Memory from "@/components/Memory.vue";
const store = { state: { msg: "choose a card" } };
describe("Memory.vue", () => {
  it("is a component", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.isVueInstance()).toBe(true);
    expect(wrapper.text()).toMatch(store.state.msg);
  });
});
