import ItemWeightComparator from "./../src/item-weight-comparator";
import Item from "./../src/item";

describe("ItemWeightComparator", () => {
  test("compareTo()", () => {
    const comparator = new ItemWeightComparator();
    const first = new Item("first", 1, 2);
    const second = new Item("second", 3, 4);
    expect(comparator.compare(first, second)).toBe(-1);
    const third = new Item("third", 5, 6);
    const fourth = new Item("fourth", 3, 4);
    expect(comparator.compare(third, fourth)).toBe(1);
    const fifth = new Item("fifth", 7, 9);
    const sixth = new Item("sixth", 8, 9);
    expect(comparator.compare(fifth, sixth)).toBe(-1);
    const seventh = new Item("seventh", 11, 12);
    const eighth = new Item("eighth", 10, 12);
    expect(comparator.compare(seventh, eighth)).toBe(1);
  });
});
