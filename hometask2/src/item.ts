interface Comparable {
  compareTo(comparator: Item): number;
}

export default abstract class Item implements Comparable {
  static numberOfItems: number = 0;
  private _id: number;
  protected _name: string;
  protected _value: number;
  protected _weight: number;

  constructor(name: string, value: number, weight: number) {
    this._name = name;
    this._value = value;
    this._weight = weight;
    this._id = Item.numberOfItems;
    Item.numberOfItems++;
  }

  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  get value(): number {
    return this._value;
  }
  set value(price: number) {
    this._value = price;
  }
  get weight(): number {
    return this._weight;
  }
  set weight(weight: number) {
    this._weight = weight;
  }

  round(digits: number, value: number) {
    return +value.toFixed(digits);
  }
  roundWeight(weight: number): number {
    return this.round(2, weight);
  }
  toString() {
    return `${this.name} − Value: ${this.value}, Weight: ${this.roundWeight(
      this.weight
    )}`;
  }
  compareTo(other: Item): number {
    return this.value > other.value
      ? 1
      : this.value < other.value
      ? -1
      : this.name.toLowerCase() <= other.name.toLowerCase()
      ? 1
      : 1;
  }
  static reset() {
    Item.numberOfItems = 0;
  }
  abstract use(): void;
}
