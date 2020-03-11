import Item from "./item";
import ItemComparator from "./item-weight-comparator";

export default class Inventory {
  private items: Array<Item> = [];
  constructor() {}

  addItem(item: Item) {
    this.items.push(item);
  }
  sort(): void;
  sort(comparator: ItemComparator): void;
  sort(comparator?: ItemComparator) {
    const compare = comparator
      ? comparator.compare
      : (a: Item, b: Item) => a.value - b.value;

    this.items = this.items.sort(compare);
  }
  toString(): string {
    return this.items.map(item => item.toString()).join(", ");
  }
}
