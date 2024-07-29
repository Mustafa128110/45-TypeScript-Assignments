let car: string = "Aston Martin DB11";

console.log("Is the car Aston Martin DB11?");
if (car === "Aston Martin DB11") {
    console.log(true);

    var properties: {
        engine: string;
        horsepower: number;
        torque: number;
        speeds: number;
        transmission: string;
        price: number;
        topSpeed: number;
    } = {
        engine: "twin turbo charged V12",
        horsepower: 630,
        torque: 516,
        speeds: 8,
        transmission: "automatic",
        price: 235586,
        topSpeed: 208,
    }

}

console.log("Does the car have a V8 engine?");
if (properties.engine === "twin turbo charged V8") {
    console.log(true);
} else {
    console.log(false);
}

console.log("Does the car go over 210mph?");
if (properties.topSpeed === 210) {
    console.log(true);
} else {
    console.log(false);
}

console.log("Does the car have 630 horsepower?");
if (properties.horsepower === 630) {
    console.log(true);
} else {
    console.log(false);
}

console.log("Does the car have 520 lb-ft of torque?");
if (properties.torque === 520) {
    console.log(true);
} else {
    console.log(false);
}

console.log("Does the car have 8 speeds?");
if (properties.speeds === 8) {
    console.log(true);
} else {
    console.log(false);
}

console.log("Does the car have an automatic transmission?");
if (properties.transmission === "automatic") {
    console.log(true);
} else {
    console.log(false);
}

console.log("Is the price of the car $250000?");
if (properties.price === 250000) {
    console.log(true);
} else {
    console.log(false);
}

console.log("Does the car have a twin turbo charged engine?");
if (properties.engine === "twin turbo charged V12") {
    console.log(true);
} else {
    console.log(false);
}

console.log("Does the car have 7 speeds?");
if (properties.speeds === 7) {
    console.log(true);
} else {
    console.log(false);
}
