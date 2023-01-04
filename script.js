export const capitalize = (word) => {
	return word.replace(word[0], word[0].toUpperCase());
};

export const reverseString = (word) => {
	let splitWord = word.split("");
	let reversedWord = splitWord.reverse();
	return reversedWord.join("");
};

export const calculator = {
	add: function (num1, num2) {
		return num1 + num2;
	},
	subtract: function (num1, num2) {
		return num1 - num2;
	},
	multiply: function (num1, num2) {
		return num1 * num2;
	},
	divide: function (num1, num2) {
		return num1 / num2;
	},
};

export const caesarCipher = (word) => {
	let baseString = "";
	for (let key in word) {
		let code = word[key].charCodeAt();
		if (code == 122) {
			code = 97;
			baseString += String.fromCharCode(code);
		} else if (code == 90) {
			code = 65;
			baseString += String.fromCharCode(code);
		} else {
			code += 1;
			baseString += String.fromCharCode(code);
		}
	}

	return baseString;
};

export const analyzeArray = (arr) => {
	function test(total, currentValue) {
		return total + currentValue;
	}
	let numAverage = arr.reduce(test) / arr.length;

	let smallNum = Math.min(...arr);
	let bigNum = Math.max(...arr);

	return {
		length: arr.length,
		average: numAverage,
		max: bigNum,
		min: smallNum,
	};
};
