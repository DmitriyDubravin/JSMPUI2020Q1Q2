import Weapon from "./weapon";

export default class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("bow", baseDamage, baseDurability, value, weight);
  }
  polish() {
    const nextDamageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;
    if (nextDamageModifier <= 1) {
      this.damageModifier = nextDamageModifier;
    }
  }
}
