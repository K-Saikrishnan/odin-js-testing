import { describe, expect, it } from 'vitest';
import { mergeSort } from './mergeSort';

describe('mergeSort', () => {
  it('should throw an error for invalid input', () => {
    const expectedErr = Error(`${mergeSort.name} expects a number array`);

    expect(() => mergeSort(-42)).toThrowError(expectedErr);
    expect(() => mergeSort(false)).toThrowError(expectedErr);
    expect(() => mergeSort(['Hello', 'World'])).toThrowError(expectedErr);
  });

  it('should sort an array of numbers', () => {
    expect(mergeSort([5, 3, 8, 4, 2, 7, 1, 6])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
  });
});
