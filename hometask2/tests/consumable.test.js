import Consumable from "./../src/consumable";

describe("Consumable", () => {
  test("isConsumed()", () => {
    const consumable = new Consumable("bread", 1, 2, false);
    expect(consumable.isConsumed()).toBe(false);
  });
  test("isSpoiled()", () => {
    const consumable = new Consumable("bread", 1, 2, true);
    expect(consumable.isSpoiled()).toBe(true);
  });
  test("setConsumed()", () => {
    const consumable = new Consumable("bread", 1, 2, false);
    consumable.setConsumed(true);
    expect(consumable.consumed).toBe(true);
    consumable.setConsumed(false);
    expect(consumable.consumed).toBe(false);
  });
  test("eat()", () => {
    const consumable = new Consumable("bread", 1, 2, false);
    expect(consumable.eat()).toBe(`You eat the bread.`);
  });
  test("use() if spoiled", () => {
    const consumable = new Consumable("bread", 1, 2, true);
    expect(consumable.use()).toBe(`You eat the bread. You feel sick.`);
  });
  test("use() if already consumed", () => {
    const consumable = new Consumable("bread", 1, 2, true);
    consumable.setConsumed(true);
    expect(consumable.use()).toBe(
      `There is nothing left of the bread to consume.`
    );
  });
  test("use() ", () => {
    const consumable = new Consumable("bread", 1, 2, false);
    const spy = jest.spyOn(consumable, "eat");
    consumable.use();
    expect(spy).toHaveBeenCalled();
  });
});
