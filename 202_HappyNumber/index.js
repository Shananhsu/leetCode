const getSum = (num) => {
	let sum = 0;
	while (num > 0) {
		let digit = num % 10;
		sum += digit * digit;
		num = Math.floor(num / 10);
	}
	return sum;
}

const isHappy = (n) => {
	let seen = new Set();
	while (n !== 1 && !seen.has(n)) {
		seen.add(n);
		n = getSum(n);
	}
	return n === 1;
};

console.log(isHappy(19));