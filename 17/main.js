var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guestList = ["Linda", "Daniel", "Robert", "Christina", "Charlie"];
guestList.unshift("Thomas"); // adds one at the beginning
//guestList.push("Micheal");                               // adds one at the end
guestList = __spreadArray(__spreadArray([], guestList, true), ["Micheal"], false); // adds one at the end
var middle = Math.floor((guestList.length) / 2);
guestList.splice(middle, 0, "Suzy"); // adds one at the middle without removing any
console.log("\nWe can invite only two people for dinner.\n");
while (guestList.length != 2) {
    console.log("We're very sorry we cant't invite you, " + guestList[0] + ".");
    console.log("We're very sorry we cant't invite you, " + guestList[guestList.length - 1] + ".");
    guestList.pop(); // removes one from the end
    guestList.shift(); // removes one from the beginning
    //guestList.splice(0, 1);                              // removes one from index 0
}
console.log("");
guestList.forEach(function (guest) { console.log("Hello " + guest + ", you're still invited!"); });
guestList = []; // emptying list
console.log("Empty guest list " + guestList);
