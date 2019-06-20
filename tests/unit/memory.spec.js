import { shallowMount } from "@vue/test-utils";

import Memory from "@/components/Memory.vue";

describe("Memory.vue", () => {
  it("shuffles the cards on click", () => {
    const wrapper = shallowMount(Memory);
    //makes sure data resets
    wrapper.setData({ shuffled: 0 });
    //clicks on shuffle button
    wrapper.find("button").trigger("click");
    // checks cards are shuffled
    expect(wrapper.vm.shuffled).toBe(1);
  });
});
