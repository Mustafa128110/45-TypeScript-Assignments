console.log("Testing equality with strings:");
console.log("apple" === "apple");

console.log("Testing wih lowercase:");
console.log("APPLE".toLowerCase() === "apple");

console.log("Numerical tests:");
console.log(3 === 3);
console.log(6 > 4);
console.log(6 >= 6);
console.log(6 <= 4);
console.log(3 < 1);

console.log("Testing with \"&&\" & \"||\"");
console.log(3 > 2 && 4 > 3);
console.log(3 > 2 && 1 > 3);
console.log(3 > 2 || 3 > 4);
console.log(1 > 2 || 3 > 4);

let fruits: string[] = ["Pear", "Berry", "Cherry"];

console.log(...fruits);
console.log("Is \"Pear\" in fruits?");
console.log(fruits.some(fruit => fruit === "Pear"));
console.log("Is \"Apple\" in the fruits?");
console.log(fruits.some(fruit => fruit === "Apple"));
console.log("Is \"Banana\" not in fruits?");
console.log(!fruits.some(fruit => fruit === "Banana"));