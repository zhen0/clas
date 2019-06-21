import { shallowMount } from "@vue/test-utils";

import Pairs from "@/components/Pairs.vue";

describe("Pairs.vue", () => {
  it("shows the value of both cards", () => {
    const pair = [
      { suit: "hearts", value: 12 },
      { suit: "diamonds", value: 12 }
    ];
    const wrapper = shallowMount(Pairs, {
      propsData: {
        pair
      }
    });

    expect(wrapper.text()).toMatch(
      pair[0].value.toString(),
      pair[1].value.toString()
    );
  });
});
