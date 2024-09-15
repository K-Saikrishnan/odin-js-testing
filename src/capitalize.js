export function capitalize(text) {
  if (typeof text !== 'string') {
    throw new Error(`${capitalize.name} expects a string`);
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}
