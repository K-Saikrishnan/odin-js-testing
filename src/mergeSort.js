export function mergeSort(arr) {
  if (!Array.isArray(arr) || arr.some((num) => typeof num !== 'number')) {
    throw new Error(`${mergeSort.name} expects a number array`);
  }

  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted.concat(left, right);
}
