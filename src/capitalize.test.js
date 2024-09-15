import { describe, expect, it } from 'vitest';
import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should throw an error for invalid input', () => {
    const expectedErr = Error(`${capitalize.name} expects a string`);

    expect(() => capitalize(42)).toThrowError(expectedErr);
    expect(() => capitalize(false)).toThrowError(expectedErr);
    expect(() => capitalize(['Hello', 'World'])).toThrowError(expectedErr);
  });

  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('hELLO')).toBe('HELLO');
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('')).toBe('');
  });
});
