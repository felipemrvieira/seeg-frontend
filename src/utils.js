/* eslint-disable camelcase */

// -------------------------- imported from the old project --------------------------

export function formatNumber(number, separator, decimal_separator, decimals) {
	// var number = `${number.toFixed(decimals)}`;
	const x = number.toFixed(decimals).split('.');
	let x1 = x[0];
	const x2 = x.length > 1 ? decimal_separator + x[1] : '';
	const rgx = /(\d+)(\d{3})/;
	let m = false;

	if (x1 - 999999 > 0.01) {
		x1 = (x1 / 1000000).toFixed(0);
		m = true;
	}
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, `$1${separator}$2`);
	}
	if (m) {
		x1 += 'm';
	}
	return x1 + x2;
}
