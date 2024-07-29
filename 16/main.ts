let guestList: string[] = ["Linda", "Robert", "Christina", "Charlie"];

console.log("\nWe found a bigger dinner table!\n");

guestList.unshift("Thomas");                               // adds one at the beginning
//guestList.push("Micheal");                               // adds one at the end
guestList = [...guestList, "Micheal"];                     // adds one at the end
let middle: number = Math.floor((guestList.length) / 2)
guestList.splice(middle, 0, "Suzy");                       // adds one at the middle without removing any

guestList.forEach(guest => {console.log("Hello " + guest + ", please join us for dinner.")});
