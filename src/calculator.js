"use strict";

function check(...args) {
  for (const v of args) {
    if (typeof v !== "number" || !Number.isFinite(v)) {
      throw new TypeError(
        `Argument invalide : un nombre fini est attendu (reçu : ${String(v)})`
      );
    }
  }
}

/** a + b */
function add(a, b) { check(a, b); return a + b; }
/** a − b */
function subtract(a, b) { check(a, b); return a - b; }
/** a × b */
function multiply(a, b) { check(a, b); return a * b; }
/** a ÷ b ; lance une Error si b vaut 0 */
function divide(a, b) {
  check(a, b);
  if (b === 0) throw new Error("Division par zéro impossible");
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
