function cars(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(cars("Toyota", "Yaris", ["year", "2021"], ["color", "White"]));
console.log(cars("Aston Martin", "DB11", ["year", "2019"], ["color", "Silver"]));
console.log(cars("Bentley", "Continental", ["year", "2022"], ["color", "White"]));
