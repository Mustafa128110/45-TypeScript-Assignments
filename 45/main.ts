function cars(manufacturer: string, model: string,  ...options: [string, any][]): Object {

    let car = {manufacturer, model};
    options.forEach(([key, value ]) => car[key] = value);

    return car;

}

console.log(cars("Toyota", "Yaris", ["year", "2021"], ["color", "White"]));
console.log(cars("Aston Martin", "DB11", ["year", "2019"], ["color", "Silver"]));
console.log(cars("Bentley", "Continental", ["year", "2022"], ["color", "White"]));