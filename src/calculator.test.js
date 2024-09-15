import { describe, expect, it } from 'vitest';
import { Calculator } from './calculator';

describe('Calculator', () => {
  const calculator = new Calculator();

  it('throws an error for invalid input', () => {
    const expectedErr = Error(`${Calculator.name} expects numbers only`);

    expect(() => new Calculator('a', 'b')).toThrowError(expectedErr);
    expect(() => calculator.add('a', 'b')).toThrowError(expectedErr);
    expect(() => calculator.subtract('a', 'b')).toThrowError(expectedErr);
    expect(() => calculator.multiply('a', 'b')).toThrowError(expectedErr);
    expect(() => calculator.divide('a', 'b')).toThrowError(expectedErr);
  });

  it('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it('subtracts two numbers', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });

  it('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('divides two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });
});
