import { shallowMount } from "@vue/test-utils";

import Pairs from "@/components/Pairs.vue";

describe("Pairs.vue", () => {
  it("is a component", () => {
    const wrapper = shallowMount(Pairs);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
