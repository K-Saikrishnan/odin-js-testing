export function caesarCipher(plainText, key) {
  if (typeof plainText !== 'string' || typeof key !== 'number') {
    throw new Error(`${caesarCipher.name} expects a string and a number`);
  }

  const shiftAmount = key % 26,
    startLower = 'a'.charCodeAt(0),
    startUpper = 'A'.charCodeAt(0);

  return plainText
    .split('')
    .map((char) => {
      if (!char.match(/[a-z]/i)) return char;

      const start = char === char.toLowerCase() ? startLower : startUpper;

      return String.fromCharCode(((char.charCodeAt(0) + shiftAmount + 26 - start) % 26) + start);
    })
    .join('');
}
