import { describe, expect, it } from 'vitest';
import { analyzeArray } from './analyzeArray';

describe('analyzeArray', () => {
  it('throws error for invalid input', () => {
    const expectedErr = Error(`${analyzeArray.name} expects an array of numbers`);

    expect(() => analyzeArray('a')).toThrowError(expectedErr);
    expect(() => analyzeArray([1, 'b'])).toThrowError(expectedErr);
  });

  it('returns analysis for valid input with +ve numbers', () => {
    const array = [1, 2, 3, 4, 5];

    expect(analyzeArray(array)).toEqual({
      avg: 3,
      min: 1,
      max: 5,
      length: 5,
    });
  });

  it('returns analysis for valid input with -ve numbers', () => {
    const array = [-1, -2, -3, -4, -5];

    expect(analyzeArray(array)).toEqual({
      avg: -3,
      min: -5,
      max: -1,
      length: 5,
    });
  });
});
