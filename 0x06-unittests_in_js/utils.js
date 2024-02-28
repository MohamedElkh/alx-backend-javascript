class Utils {
    static calculateNumber(type, a, b) {
	const anlx = Math.round(a);
	const bnlx = Math.round(b);
	let clx = 0;

	switch (type) {
	case 'SUM':
            clx = anlx + bnlx;
            break;

	case 'SUBTRACT':
            clx = anlx - bnlx;
            break;

	case 'DIVIDE':
	    if (bnlx === 0) {
		clx = "Error";
	    } else {
		clx = anlx / bnlx;
	    }
	    break;
	}

	return clx;
    }
}

module.exports = Utils;
