let guestList: string[] = ["Linda", "Daniel", "Robert", "Christina", "Charlie"];

guestList.unshift("Thomas");                               // adds one at the beginning
//guestList.push("Micheal");                               // adds one at the end
guestList = [...guestList, "Micheal"];                     // adds one at the end
let middle: number = Math.floor((guestList.length) / 2)
guestList.splice(middle, 0, "Suzy");                       // adds one at the middle without removing any

console.log("\nWe can invite only two people for dinner.\n");

while (guestList.length != 2) {

    console.log("We're very sorry we cant't invite you, " + guestList[0] + ".");
    console.log("We're very sorry we cant't invite you, " + guestList[guestList.length - 1] + ".");

    guestList.pop();                                       // removes one from the end
    guestList.shift();                                     // removes one from the beginning
    //guestList.splice(0, 1);                              // removes one from index 0
}

console.log("");
guestList.forEach(guest => {console.log("Hello " + guest + ", you're still invited!")});

guestList = [];                                            // emptying list
console.log("Empty guest list " + guestList);