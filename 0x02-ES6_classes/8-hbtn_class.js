export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](err) {
    if (err === 'number') return this._size;
    if (err === 'string') return this._location;
    return this;
  }
}
