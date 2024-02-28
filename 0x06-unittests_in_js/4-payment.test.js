const {describe, it} = require("mocha");
const Utils = require("./utils");
const assert = require("assert");
const sendPaymentRequestToApi = require("./4-payment");
const sinon = require("sinon");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber is stubbed", function() {
	const spylv = sinon.spy(console, "log");
	const stblv = sinon.stub(Utils, "calculateNumber").returns(10);

	sendPaymentRequestToApi(100, 20);
	assert(spylv.withArgs("The total is: 10").calledOnce);

	assert(stblv.withArgs("SUM", 100, 20).calledOnce);
    });
});
