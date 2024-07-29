var guestList = ["Rebecca", "Robert", "Christina", "Charlie"];
console.log("\nRebecca won't be able to make it tonight\n");
guestList[0] = "Linda"; // adds "Linda" at index 0
guestList.forEach(function (guest) { console.log("Hello " + guest + ", please join us for dinner."); });
