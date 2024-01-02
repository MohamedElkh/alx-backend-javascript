export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const el of array) {
    arr.push(appendString + el);
  }

  return arr;
}
