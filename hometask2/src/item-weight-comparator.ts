import Item from "./item";

interface Comparator {
  compare(a: any, b: any): number;
}
interface ItemComparator extends Comparator {
  compare(a: Item, b: Item): number;
}

export default class ItemWeightComparator implements ItemComparator {
  compare(a: Item, b: Item): number {
    return a.weight > b.weight ? 1 : a.value < b.value ? -1 : a.compareTo(b);
  }
}
