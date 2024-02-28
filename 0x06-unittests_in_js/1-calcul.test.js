const assert = require("assert");
const calculateNumber = require("./1-calcul");
const { it, describe } = require("mocha");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const reslx = calculateNumber("SUM", 1, 2);
      assert.strictEqual(reslx, 3);
    });

    it(`checking if numbers round`, function() {
      const reslx = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(reslx, -1);
    });

    it(`checking if numbers round`, function() {
      const reslx = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(reslx, 2);
    });

    it(`checking if numbers round`, function() {
      const reslx = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(reslx, 2);
    });

    it(`checking if numbers round`, function() {
      const reslx = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(reslx, "Error");
    });

    it(`checking if numbers round`, function() {
      const reslx = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(reslx, 0.2);
    });
});
