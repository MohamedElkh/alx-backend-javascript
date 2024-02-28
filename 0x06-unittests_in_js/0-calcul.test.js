const assert = require("assert");
const calculateNumber = require("./0-calcul");
const { it, describe } = require("mocha");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const reslv = calculateNumber(1, 2);
      assert.strictEqual(reslv, 3);
    });

    it(`checking if numbers round`, function() {
      const reslv = calculateNumber(1.4, 2.2);
      assert.strictEqual(reslv, 3);
    });

    it(`checking if numbers round`, function() {
      const reslv = calculateNumber(1.6, 2.7);
      assert.strictEqual(reslv, 5);
    });

    it(`checking if numbers round`, function() {
      const reslv = calculateNumber(0, 0);
      assert.strictEqual(reslv, 0);
    });

    it(`checking if numbers round`, function() {
      const reslv = calculateNumber(-1.6, -1.7);
      assert.strictEqual(reslv, -4);
    });

    it(`checking if numbers round`, function() {
      const reslv = calculateNumber(-1.4, -1.3);
	assert.strictEqual(reslv, -2);
    });
});
