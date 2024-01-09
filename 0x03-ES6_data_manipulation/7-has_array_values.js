export default function hasValuesFromArray(array, values) {
  for (const value of values) {
    if (!array.includes(value)) {
      return false;
    }
  }
  return true;
}
