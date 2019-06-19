import { shallowMount } from "@vue/test-utils";
import Card from "@/components/Card.vue";

describe("Cards.vue", () => {
  it("renders a card when passed", () => {
    const card = { suit: "hearts", value: 12, id: 1 };
    const value = card.value.toString();
    const wrapper = shallowMount(Card, {
      propsData: {
        card,
        value
      }
    });
    expect(wrapper.is(Card)).toBe(true);
    //makes sure card is turned so value can be read
    wrapper.setData({ turned: true, unturned: false });
    // checks card turned
    expect(wrapper.vm.turned).toBe(true);
    // checks correct value is being rendered
    expect(wrapper.text()).toMatch(value);
    // Needs review
    // expect(wrapper.element).toMatchSnapshot();
  });
});
