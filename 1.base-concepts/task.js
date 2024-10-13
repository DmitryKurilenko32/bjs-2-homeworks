"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let dis = b ** 2 - 4 * a * c

	if (dis === 0) {
		arr[0] = -b / (2 * a);

	} else if (dis < 0) {
		arr[0] = (-b + Math.sqrt(dis)) / (2 * a);
		arr[1] = (-b - Math.sqrt(dis)) / (2 * a);
	} else if (dis > 0) {
		arr = []
	}

	return arr;
}