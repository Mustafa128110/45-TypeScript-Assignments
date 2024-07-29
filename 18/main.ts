let places: string[] = ["Hunza", "Gilgit", "Chitral", "Fairy-Meadows", "Skardu"];

console.log("Original Array: " + places + "\n");

console.log("Array in Alphabetical Order: " + [...places].sort());
console.log("Original Array: " + places + "\n");

console.log("Array in Alphabetical Reverse Order: " + [...places].sort().reverse());
console.log("Original Array: " + places + "\n");

places.reverse();
console.log("Array in Reverse Order: " + places);

places.reverse();
console.log("Original Array: " + places + "\n");

places.sort()
console.log("Array in Alphabetical Order: " + places + "\n");

places.reverse();
console.log("Array in Alphabetical Reverse Order: " + places);