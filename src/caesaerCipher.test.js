import { describe, expect, it } from 'vitest';
import { caesarCipher } from './caesaerCipher';

describe('caesarCipher', () => {
  it('throws error for invalid input', () => {
    const expectedErr = Error(`${caesarCipher.name} expects a string and a number`);

    expect(() => caesarCipher('a', 'b')).toThrowError(expectedErr);
    expect(() => caesarCipher(1, 2)).toThrowError(expectedErr);
  });

  it('encrypts with +ve keys', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  it('encrypts with -ve keys', () => {
    expect(caesarCipher('abc', -1)).toBe('zab');
    expect(caesarCipher('abc', -26)).toBe('abc');
  });

  it('wraps around the alphabet', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('abc', 26)).toBe('abc');
  });

  it('preserves mixed case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('aBc', 1)).toBe('bCd');
    expect(caesarCipher('aBc', 26)).toBe('aBc');
  });

  it('preserves non-alphabetic characters', () => {
    expect(caesarCipher('abc 123', 26)).toBe('abc 123');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});
