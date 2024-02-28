const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const reslx = Utils.calculateNumber("SUM", totalAmount, totalShipping);

    console.log(`The total is: ${reslx}`);
}

module.exports = sendPaymentRequestToApi;
