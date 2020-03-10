import Item from "./item";

export default abstract class Weapon extends Item {
  MODIFIER_CHANGE_RATE: number = 0.05;
  private _baseDamage: number;
  private _damageModifier: number = 0.05;
  private _baseDurability: number;
  private _durabilityModifier: number = 0.05;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
    this._baseDamage = baseDamage;
    this._baseDurability = baseDurability;
  }

  get baseDamage() {
    return this._baseDamage;
  }
  set baseDamage(damage: number) {
    this._baseDamage = damage;
  }
  get baseDurability() {
    return this._baseDurability;
  }
  set baseDurability(durability: number) {
    this._baseDurability = durability;
  }
  get damageModifier() {
    return this._damageModifier;
  }
  set damageModifier(modifier: number) {
    this._damageModifier = modifier;
  }
  get durabilityModifier() {
    return this._durabilityModifier;
  }
  set durabilityModifier(modifier: number) {
    this._durabilityModifier = modifier;
  }

  getDamage() {
    return this.baseDamage + this.damageModifier;
  }
  getDurability() {
    return this.round(2, this.baseDurability + this.durabilityModifier);
  }
  toString() {
    return `${this.name} − Value: ${this.value}, Weight: ${
      this.weight
    }, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
  }
  use() {
    const isBroken = this.getDurability() <= 0;
    if (isBroken) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    this.durabilityModifier = this.round(
      2,
      this.durabilityModifier - this.MODIFIER_CHANGE_RATE
    );
    return this.getDurability() > 0
      ? `You use the ${
          this.name
        } , dealing ${this.getDamage()} points of damage.`
      : `You use the ${
          this.name
        } , dealing ${this.getDamage()} points of damage. The ${
          this.name
        } breaks.`;
  }
  abstract polish(): void;
}
