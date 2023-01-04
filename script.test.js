import {
	analyzeArray,
	capitalize,
	calculator,
	reverseString,
	caesarCipher,
} from "./script";

test("return first character capitalized", () => {
	expect(capitalize("tom")).toBe("Tom");
});
/////
test("return string reversed", () => {
	expect(reverseString("tom")).toBe("mot");
});
/////
test("calculator function add", () => {
	expect(calculator.add(1, 1)).toBe(2);
});

test("calculator function subtract", () => {
	expect(calculator.subtract(1, 1)).toBe(0);
});
test("calculator function multiply", () => {
	expect(calculator.multiply(1, 1)).toBe(1);
});
test("calculator function divide", () => {
	expect(calculator.divide(1, 1)).toBe(1);
});
/////
test("shift letters up one character", () => {
	expect(caesarCipher("apple")).toBe("bqqmf");
});
/////
test("return an object of array traits", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
		length: 6,
		average: 4,
		max: 8,
		min: 1,
	});
});
