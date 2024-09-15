export class Calculator {
  constructor(a = 0, b = 0) {
    this.validateType(a, b);
    this.a = a;
    this.b = b;
  }

  validateType(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error(`${Calculator.name} expects numbers only`);
    }
  }

  add(a, b) {
    this.validateType(a, b);
    return a + b;
  }

  subtract(a, b) {
    this.validateType(a, b);
    return a - b;
  }

  multiply(a, b) {
    this.validateType(a, b);
    return a * b;
  }

  divide(a, b) {
    this.validateType(a, b);
    return a / b;
  }
}
