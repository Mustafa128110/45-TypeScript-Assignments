var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestList = ["Linda", "Robert", "Christina", "Charlie"];
console.log("\nWe found a bigger dinner table!\n");
guestList.unshift("Thomas"); // adds one at the beginning
//guestList.push("Micheal");                               // adds one at the end
guestList = __spreadArray(__spreadArray([], guestList, true), ["Micheal"], false); // adds one at the end
var middle = Math.floor((guestList.length) / 2);
guestList.splice(middle, 0, "Suzy"); // adds one at the middle without removing any
console.log("I am inviting " + guestList.length + " guests for dinner.");
