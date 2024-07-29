var favorite_fruits = ["Apple", "Banana", "Mango", "Cherry", "Plum"];
if (favorite_fruits.some(function (fruit) { return fruit === "Apple"; })) {
    console.log("You really like Apples!");
}
if (favorite_fruits.some(function (fruit) { return fruit === "Banana"; })) {
    console.log("You really like Bananas!");
}
if (favorite_fruits.some(function (fruit) { return fruit === "Mango"; })) {
    console.log("You really like Mangoes!");
}
if (favorite_fruits.some(function (fruit) { return fruit === "Cherry"; })) {
    console.log("You really like Cherries!");
}
if (favorite_fruits.some(function (fruit) { return fruit === "Plum"; })) {
    console.log("You really like Plums!");
}
