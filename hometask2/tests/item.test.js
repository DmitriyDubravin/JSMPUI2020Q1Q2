import Item from "./../src/item";
import { checkGetter, checkSetter } from "./support";

describe("Item", () => {
  describe("getters/setters", () => {
    test("get name()", () => {
      checkGetter(new Item("name", 1, 2), "name", "myname");
    });
    test("set name()", () => {
      checkSetter(new Item("name", 1, 2), "name", "myname");
    });
    test("get value()", () => {
      checkGetter(new Item("name", 1, 2), "value", 10);
    });
    test("set value()", () => {
      checkSetter(new Item("name", 1, 2), "value", 10);
    });
    test("get weight()", () => {
      checkGetter(new Item("name", 1, 2), "weight", 20);
    });
    test("set weight()", () => {
      checkSetter(new Item("name", 1, 2), "weight", 20);
    });
    test("get id()", () => {
      Item.reset();
      let instance = new Item();
      instance = new Item();
      instance = new Item();
      expect(instance.id).toBe(2);
    });
  });
  test("setting id's properly", () => {
    Item.reset();
    const instance1 = new Item();
    const instance2 = new Item();
    expect(instance1.id).toBe(0);
    expect(instance2.id).toBe(1);
    expect(Item.numberOfItems).toBe(2);
  });
  test("reset()", () => {
    Item.reset();
    expect(Item.numberOfItems).toBe(0);
  });
  test("round()", () => {
    const instance = new Item();
    expect(instance.round(1, 0.333)).toBe(0.3);
    expect(instance.round(2, 0.333)).toBe(0.33);
    expect(instance.round(3, 0.333)).toBe(0.333);
  });
  test("roundWeight()", () => {
    const instance = new Item();
    expect(instance.roundWeight(0.333)).toBe(0.33);
    expect(instance.roundWeight(0.046)).toBe(0.05);
    expect(instance.roundWeight(0.099)).toBe(0.1);
  });
  test("toString()", () => {
    const name = "any";
    const value = 12312;
    const weight = 0.113;
    const instance = new Item();
    instance.name = name;
    instance.value = value;
    instance.weight = weight;
    expect(instance.toString()).toBe(
      `${name} − Value: ${value}, Weight: ${instance.roundWeight(weight)}`
    );
  });
  test("compareTo()", () => {
    const current = new Item("current", 22, 1);
    const other = new Item("other", 12, 2);
    expect(current.compareTo(other)).toBe(1);
    current.value = 11;
    expect(current.compareTo(other)).toBe(-1);
    current.value = 12;
    current.name = "x";
    expect(current.compareTo(other)).toBe(1);
    current.name = "X";
    other.name = "x";
    expect(current.compareTo(other)).toBe(1);
  });
});
