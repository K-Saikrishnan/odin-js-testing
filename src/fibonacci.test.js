import { describe, expect, it } from 'vitest';
import { fibsIter, fibsRec } from './fibonacci';

describe('fibs', () => {
  it('should throw an error for invalid input', () => {
    const expectedErr = Error(`${fibsIter.name} expects a non-negative number`);

    expect(() => fibsIter(-42)).toThrowError(expectedErr);
    expect(() => fibsIter(false)).toThrowError(expectedErr);
    expect(() => fibsIter(['Hello', 'World'])).toThrowError(expectedErr);
  });

  it('should return the first n Fibonacci numbers', () => {
    expect(fibsIter(0)).toEqual([0]);
    expect(fibsIter(1)).toEqual([0]);
    expect(fibsIter(2)).toEqual([0, 1]);
    expect(fibsIter(3)).toEqual([0, 1, 1]);
    expect(fibsIter(4)).toEqual([0, 1, 1, 2]);
    expect(fibsIter(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibsIter(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibsIter(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fibsIter(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibsIter(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibsIter(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});

describe('fibsRec', () => {
  it('should throw an error for invalid input', () => {
    const expectedErr = Error(`${fibsRec.name} expects a non-negative number`);

    expect(() => fibsRec(-42)).toThrowError(expectedErr);
    expect(() => fibsRec(false)).toThrowError(expectedErr);
    expect(() => fibsRec(['Hello', 'World'])).toThrowError(expectedErr);
  });

  it('should return the first n Fibonacci numbers', () => {
    expect(fibsRec(0)).toEqual([0]);
    expect(fibsRec(1)).toEqual([0]);
    expect(fibsRec(2)).toEqual([0, 1]);
    expect(fibsRec(3)).toEqual([0, 1, 1]);
    expect(fibsRec(4)).toEqual([0, 1, 1, 2]);
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
    expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibsRec(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibsRec(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
