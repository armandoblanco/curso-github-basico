const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { saludar, sumar } = require("../src/index.js");

describe("saludar", () => {
  it("devuelve saludo con nombre cuando recibe un nombre", () => {
    assert.strictEqual(saludar("Ana"), "Hola, Ana!");
  });

  it("devuelve saludo genérico cuando no recibe nombre", () => {
    assert.strictEqual(saludar(), "Hola, mundo!");
  });

  it("devuelve saludo genérico cuando recibe valor vacío", () => {
    assert.strictEqual(saludar(""), "Hola, mundo!");
  });
});

describe("sumar", () => {
  it("suma dos números positivos", () => {
    assert.strictEqual(sumar(2, 3), 5);
  });

  it("suma un número positivo y uno negativo", () => {
    assert.strictEqual(sumar(5, -3), 2);
  });

  it("suma ceros", () => {
    assert.strictEqual(sumar(0, 0), 0);
  });
});
