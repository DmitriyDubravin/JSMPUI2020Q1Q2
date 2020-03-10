import Item from "./item";

export default abstract class Consumable extends Item {
  private consumed: boolean = false;
  private spoiled: boolean;
  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
  }
  isConsumed(): boolean {
    return this.consumed;
  }
  isSpoiled(): boolean {
    return this.spoiled;
  }
  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }
  eat() {
    return `You eat the ${this.name}.`;
  }
  use() {
    if (this.consumed) {
      return `There is nothing left of the bread to consume.`;
    }
    if (this.spoiled) {
      return `You eat the ${this.name}. You feel sick.`;
    }
    this.eat();
  }
}
