export default function createIteratorObject(report) {
  const obj = [];
  for (const el of Object.keys(report)) {
    obj.push(el);
  }
  return obj;
}

