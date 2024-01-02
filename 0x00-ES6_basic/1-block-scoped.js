export default function taskBlock(trueOrFalse) {
  /* eslint-enable */
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-enable no-u */
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
