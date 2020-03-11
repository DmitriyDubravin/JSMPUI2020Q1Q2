import Weapon from "./../src/weapon";
import { checkGetter, checkSetter } from "./support";

describe("Weapon", () => {
  describe("getters/setters", () => {
    test("get baseDamage()", () => {
      checkGetter(new Weapon("name", 1, 2, 3, 4), "baseDamage", 10);
    });
    test("set baseDamage()", () => {
      checkSetter(new Weapon("name", 1, 2, 3, 4), "baseDamage", 10);
    });
    test("get baseDurability()", () => {
      checkGetter(new Weapon("name", 1, 2, 3, 4), "baseDurability", 20);
    });
    test("set baseDurability()", () => {
      checkSetter(new Weapon("name", 1, 2, 3, 4), "baseDurability", 20);
    });
    test("get damageModifier()", () => {
      checkGetter(new Weapon("name", 1, 2, 3, 4), "damageModifier", 30);
    });
    test("set damageModifier()", () => {
      checkSetter(new Weapon("name", 1, 2, 3, 4), "damageModifier", 30);
    });
    test("get durabilityModifier()", () => {
      checkGetter(new Weapon("name", 1, 2, 3, 4), "durabilityModifier", 40);
    });
    test("set durabilityModifier()", () => {
      checkSetter(new Weapon("name", 1, 2, 3, 4), "durabilityModifier", 40);
    });
  });

  test("getDamage()", () => {
    const weapon = new Weapon("name", 1, 2, 3, 4);
    weapon.baseDamage = 2;
    weapon.damageModifier = 3;
    expect(weapon.getDamage()).toBe(5);
  });
  test("getDurability()", () => {
    const weapon = new Weapon("name", 1, 2, 3, 4);
    weapon.baseDurability = 4;
    weapon.durabilityModifier = 5;
    expect(weapon.getDurability()).toBe(9);
  });
  test("toString()", () => {
    const weapon = new Weapon("name", 1, 2, 3, 4);
    expect(weapon.toString()).toBe(
      `${weapon.name} − Value: ${weapon.value}, Weight: ${
        weapon.weight
      }, Damage: ${weapon.getDamage()}, Durability: ${weapon.getDurability()}%`
    );
  });
  test("use()", () => {
    const weapon = new Weapon("name", 1, 2, 3, 4);
    const useResult = weapon.use();
    const expectedUseResult = `You use the ${
      weapon.name
    } , dealing ${weapon.getDamage()} points of damage.`;
    expect(useResult).toBe(expectedUseResult);
  });
  test("use() effectiveDurability change", () => {
    const weapon = new Weapon("name", 1, 2, 3, 4);
    const effectiveDurability = weapon.getDurability();
    const nextEffectiveDurability = weapon.round(
      2,
      effectiveDurability - weapon.MODIFIER_CHANGE_RATE
    );
    weapon.use();
    expect(weapon.getDurability()).toBe(nextEffectiveDurability);
  });
  test("use() item breaks", () => {
    const weapon = new Weapon("name", 1, 0, 3, 4);
    const useResult = weapon.use();
    const expectedUseResult = `You use the ${
      weapon.name
    } , dealing ${weapon.getDamage()} points of damage. The ${
      weapon.name
    } breaks.`;
    expect(useResult).toBe(expectedUseResult);
  });
  test("use() item is broken", () => {
    const weapon = new Weapon("name", 1, 0, 3, 4);
    weapon.use();
    const lastDurability = weapon.getDurability();
    const useResult = weapon.use();
    const sameDurability = weapon.getDurability();
    expect(lastDurability).toBe(sameDurability);
    const expectedUseResult = `You can't use the ${weapon.name}, it is broken.`;
    expect(useResult).toBe(expectedUseResult);
  });
});
