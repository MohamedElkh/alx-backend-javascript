const createInt8TypedArray = (length, position, value) => {
  const buf = new ArrayBuffer(length);
  const arr = new Int8Array(buf);

  if (position > arr.length) throw new Error('Position outside range');
  arr[position] = value;

  return new DataView(buf);
};

export default createInt8TypedArray;
