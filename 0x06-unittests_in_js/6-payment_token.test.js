const getPaymentTokenFromAPI = require("./6-payment_token");
const expect = require("chai").expect;
const {describe, it} = require("mocha");

describe("getPaymentTokenFromAPI", function() {
    it("Async testing with done callback", function(done) {
	getPaymentTokenFromAPI(true)

	    .then((data) => {
		expect(data).to.have.property('data');

		done();
	    });
    });
});
