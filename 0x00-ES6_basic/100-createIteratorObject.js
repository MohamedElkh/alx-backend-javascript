// eslint-disable-next-line no-unused-vars
export default function createIteratorObject(report) {
  const obj = [];
  for (const el of Object.values(report.allEmployees)) {
    obj.push(...el);
  }
  return obj;
}
