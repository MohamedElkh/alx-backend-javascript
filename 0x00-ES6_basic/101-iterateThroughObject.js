/* eslint-disable */
export default function iterateThroughObject(reportWithIterator) {
  let arr = '', x = 0;
  for (const el of reportWithIterator) {
    if (reportWithIterator.length -1 == x) {
      arr += el
    }
    else {
      arr += el + ' | ';
    }
    x++
  }
  return arr;
}
