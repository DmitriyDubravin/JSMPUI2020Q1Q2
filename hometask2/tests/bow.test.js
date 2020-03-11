import Bow from "./../src/bow";

describe("Bow", () => {
  test("polish()", () => {
    const bow = new Bow(1, 2, 3, 4);
    const currentDamageModifier = bow.damageModifier;
    bow.polish();
    const nextDamageModifier = bow.damageModifier;
    expect(nextDamageModifier).toBe(
      currentDamageModifier + bow.MODIFIER_CHANGE_RATE
    );
  });
  test("polish() maximum is no larger than 1", () => {
    const bow = new Bow(0.9, 2, 3, 4);
    for (let i = 0; i < 20; i++) {
      bow.polish();
    }
    expect(bow.damageModifier).toBeLessThanOrEqual(1);
  });
});
