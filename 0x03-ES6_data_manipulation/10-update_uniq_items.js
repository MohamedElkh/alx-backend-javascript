const updateUniqueItems = (els) => {
  if (!(els instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [ky, val] of els.entries()) {
    if (val === 1) {
      els.set(ky, 100);
    }
  }

  return els;
};

export default updateUniqueItems;
