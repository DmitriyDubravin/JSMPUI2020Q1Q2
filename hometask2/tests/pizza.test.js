import Pizza from "./../src/pizza";

describe("Pizza", () => {
  test("eat()", () => {
    const pizza = new Pizza(6, false);
    pizza.eat();
    expect(pizza.eat()).toBe(`You eat a slice of pizza.`);
  });
  test("eat() last slice", () => {
    const pizza = new Pizza(1, false);
    const spy = jest.spyOn(pizza, "setConsumed");
    pizza.eat();
    expect(spy).toHaveBeenCalled();
  });
  test("eat() when no more slices", () => {
    const pizza = new Pizza(0, false);
    pizza.eat();
    expect(pizza.eat()).toBe("");
  });
});
