export default function createIteratorObject(report) {
  const obj = [];
  for (const item of Object.values(report.allEmployees)) {
    obj.push(...item);
  }
  return obj;
}

