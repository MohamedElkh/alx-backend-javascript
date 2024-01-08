const cleanSet = (set, startString) => {
  const strs = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((ls) => {
    if (typeof ls === 'string' && ls.startsWith(startString)) {
      strs.push(ls.slice(startString.length));
    }
  });

  return strs.join('-');
};

export default cleanSet;
