var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Hunza", "Gilgit", "Chitral", "Fairy-Meadows", "Skardu"];
console.log("Original Array: " + places + "\n");
console.log("Array in Alphabetical Order: " + __spreadArray([], places, true).sort());
console.log("Original Array: " + places + "\n");
console.log("Array in Alphabetical Reverse Order: " + __spreadArray([], places, true).sort().reverse());
console.log("Original Array: " + places + "\n");
places.reverse();
console.log("Array in Reverse Order: " + places);
places.reverse();
console.log("Original Array: " + places + "\n");
places.sort();
console.log("Array in Alphabetical Order: " + places + "\n");
places.reverse();
console.log("Array in Alphabetical Reverse Order: " + places);
