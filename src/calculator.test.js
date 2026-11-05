const { add, subtract, multiply, divide } = require("./calculator");

describe("add", () => {
  it("additionne 2 et 3", () => expect(add(2, 3)).toBe(5));
  it("additionne deux négatifs", () => expect(add(-2, -3)).toBe(-5));
  it("additionne des décimaux", () => expect(add(0.5, 0.25)).toBe(0.75));
  it("ajouter 0 ne change rien", () => expect(add(7, 0)).toBe(7));
});

describe("subtract", () => {
  it("soustrait 3 de 5", () => expect(subtract(5, 3)).toBe(2));
  it("renvoie un négatif", () => expect(subtract(3, 5)).toBe(-2));
  it("soustraire 0 ne change rien", () => expect(subtract(7, 0)).toBe(7));
});

describe("multiply", () => {
  it("multiplie 4 par 3", () => expect(multiply(4, 3)).toBe(12));
  it("multiplier par 0 donne 0", () => expect(multiply(4, 0)).toBe(0));
  it("multiplie un négatif", () => expect(multiply(-4, 3)).toBe(-12));
  it("multiplie un décimal", () => expect(multiply(0.5, 4)).toBe(2));
});

describe("divide", () => {
  it("divise 10 par 2", () => expect(divide(10, 2)).toBe(5));
  it("divise 1 par 4", () => expect(divide(1, 4)).toBe(0.25));
  it("lance « Division par zéro impossible » quand le diviseur est 0", () => {
    expect(() => divide(1, 0)).toThrow("Division par zéro impossible");
  });
  it("lance un TypeError pour un argument non numérique", () => {
    expect(() => divide("a", 2)).toThrow(TypeError);
  });
});
