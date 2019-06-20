import { shallowMount } from "@vue/test-utils";

import Card from "@/components/Card.vue";

describe("Cards.vue", () => {
  it("shows a blank card  to begin with", () => {
    const card = {
      suit: "hearts",
      value: 12,
      id: 1,
      turned: false,
      unturned: true
    };
    const wrapper = shallowMount(Card, {
      propsData: {
        card
      }
    });
    expect(wrapper.text()).toMatch("");
  });
  it("shows a value when turned", () => {
    const card = {
      suit: "hearts",
      value: 12,
      id: 1,
      turned: true,
      unturned: false
    };
    const value = card.value.toString();
    const wrapper = shallowMount(Card, {
      propsData: {
        card
      }
    });

    expect(wrapper.text()).toMatch(value);
  });
});
