export function fibsIter(length) {
  if (typeof length !== 'number' || length < 0) {
    throw new Error(`${fibsIter.name} expects a non-negative number`);
  }

  const fibs = [0, 1];

  if (length <= 1) {
    return [0];
  } else if (length === 2) {
    return fibs;
  }

  for (let i = 3; i <= length; i++) {
    fibs.push(fibs[i - 3] + fibs[i - 2]);
  }

  return fibs;
}

export function fibsRec(length) {
  if (typeof length !== 'number' || length < 0) {
    throw new Error(`${fibsRec.name} expects a non-negative number`);
  }

  if (length <= 1) {
    return [0];
  } else if (length === 2) {
    return [0, 1];
  }

  const fibs = fibsRec(length - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

  return fibs;
}
