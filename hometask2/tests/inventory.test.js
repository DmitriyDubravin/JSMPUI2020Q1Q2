import Item from "./../src/item";
import Inventory from "./../src/inventory";
import ItemWeightComparator from './../src/item-weight-comparator';

describe("Inventory", () => {
  test("addItem()", () => {
    const item1 = new Item("name1", 1, 2);
    const item2 = new Item("name2", 3, 4);
    const inventory = new Inventory();
    inventory.addItem(item1);
    inventory.addItem(item2);
    expect(inventory.items).toEqual([item1, item2]);
  });
  test("toString()", () => {
    const item1 = new Item("name1", 1, 2);
    const item2 = new Item("name2", 3, 4);
    const inventory = new Inventory();
    inventory.addItem(item1);
    inventory.addItem(item2);
    expect(inventory.toString()).toBe(
      `${item1.name} − Value: ${item1.value}, Weight: ${item1.roundWeight(
        item1.weight
      )}, ${item2.name} − Value: ${item2.value}, Weight: ${item2.roundWeight(
        item2.weight
      )}`
    );
  });
  test("sort()", () => {
    const item1 = new Item("name1", 5, 2);
    const item2 = new Item("name2", 3, 4);
    const inventory = new Inventory();
    inventory.addItem(item1);
    inventory.addItem(item2);
    inventory.sort();

    expect(inventory.items).toEqual([item2, item1]);
  });
  test("sort() with comparator", () => {
    const item1 = new Item("name1", 10, 15);
    const item2 = new Item("name2", 11, 14);
    const inventory = new Inventory();
    inventory.addItem(item1);
    inventory.addItem(item2);
    inventory.sort(ItemWeightComparator);

    expect(inventory.items).toEqual([item1, item2]);
  });
});
