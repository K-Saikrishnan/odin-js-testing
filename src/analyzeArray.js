export function analyzeArray(numbers) {
  if (!Array.isArray(numbers) || numbers.some((each) => typeof each !== 'number')) {
    throw new Error(`${analyzeArray.name} expects an array of numbers`);
  }

  return {
    avg: numbers.reduce((a, b) => a + b, 0) / numbers.length,
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
  };
}
