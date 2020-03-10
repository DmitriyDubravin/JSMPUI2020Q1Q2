import Weapon from "./weapon";

export default class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("sword", baseDamage, baseDurability, value, weight);
  }
  polish() {
    const maxDamageModifier = this.baseDamage * 1.25;
    const nextDamageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;
    if (nextDamageModifier <= maxDamageModifier) {
      this.damageModifier = nextDamageModifier;
    }
  }
}
