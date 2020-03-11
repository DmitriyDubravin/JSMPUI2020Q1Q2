import Sword from "./../src/sword";

describe("Sword", () => {
  test("polish()", () => {
    const sword = new Sword(1, 2, 3, 4);
    const currentDamageModifier = sword.damageModifier;
    sword.polish();
    const nextDamageModifier = sword.damageModifier;
    expect(nextDamageModifier).toBe(
      currentDamageModifier + sword.MODIFIER_CHANGE_RATE
    );
  });
  test("polish() maximum is no larger than x1.25", () => {
    const sword = new Sword(0.1, 2, 3, 4);
    const max = sword.baseDamage * 1.25;
    sword.polish();
    sword.polish();
    sword.polish();
    expect(sword.damageModifier).toBeLessThanOrEqual(max);
  });
});
