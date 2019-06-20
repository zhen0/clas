import { shallowMount } from "@vue/test-utils";

import Memory from "@/components/Memory.vue";

describe("Memory.vue", () => {
  it("is a component", () => {
    const wrapper = shallowMount(Memory);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
