const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const rsl = Utils.calculateNumber("SUM", totalAmount, totalShipping);

    console.log(`The total is: ${rsl}`);
}

module.exports = sendPaymentRequestToApi;
