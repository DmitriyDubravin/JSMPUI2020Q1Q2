import Consumable from "./consumable";

export default class Pizza extends Consumable {
  private numberOfSlices: number;
  private slicesEaten: number = 0;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super("pizza", 1, 2, spoiled);
    this.numberOfSlices = numberOfSlices;
  }
  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;
      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }
      return `You eat a slice of pizza.`;
    }
    return "";
  }
}
