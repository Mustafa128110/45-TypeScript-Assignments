var namee = "mustafa";
// slice() extracts a selection of the array from index 1. That is why m is index 0 is not selected.
console.log("".concat(namee.toLowerCase(), ", ").concat(namee.toUpperCase(), ", ").concat(namee.charAt(0).toUpperCase()).concat(namee.slice(1)));
// let numbers: number[] = [1, 2, 3, 4, 5];
// Extract a section of the array from index 1 to index 3 (exclusive)
// let slicedNumbers: number[] = numbers.slice(1, 3);
// console.log(slicedNumbers);    Output: [2, 3]
