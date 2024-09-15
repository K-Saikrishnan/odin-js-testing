import { describe, expect, it } from 'vitest';
import { reverseString } from './reverseString';

describe('reverseString', () => {
  it('should throw an error for invalid input', () => {
    const expectedErr = Error(`${reverseString.name} expects a string`);

    expect(() => reverseString(42)).toThrowError(expectedErr);
    expect(() => reverseString(false)).toThrowError(expectedErr);
    expect(() => reverseString(['Hello', 'World'])).toThrowError(expectedErr);
  });

  it('should reverse an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  it('should reverse a string', () => {
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('Hello World')).toBe('dlroW olleH');
    expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
  });
});
