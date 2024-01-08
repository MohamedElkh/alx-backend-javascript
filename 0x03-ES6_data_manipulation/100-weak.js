export const weakMap = new WeakMap();

export const queryAPI = (end) => {
  if (weakMap.has(end)) {
    const endp = weakMap.get(end);

    if (endp >= 4) {
      throw new Error('Endpoint load is high');
    }

    weakMap.set(end, (endp + 1));
  } else {
    weakMap.set(end, 1);
  }
};
