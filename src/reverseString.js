export function reverseString(text) {
  if (typeof text !== 'string') {
    throw new Error(`${reverseString.name} expects a string`);
  }

  return [...text].reverse().join('');
}
