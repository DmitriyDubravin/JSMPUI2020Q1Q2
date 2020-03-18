import PagesIterable from "./pages-iterable";
import Pages from "./pages";

abstract class Item {
  abstract toString(): string;
  index: number = 0;
  constructor(protected pages: Pages) {}
  [Symbol.iterator]() {
    return this;
  }
}
interface Item extends PagesIterable {}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
      );
    });
  });
}
applyMixins(Item, [PagesIterable]);

export default Item;
