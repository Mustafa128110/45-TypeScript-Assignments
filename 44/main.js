var sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("A sandwich with " + items);
};
sandwich("meat", "potato", "cabbage");
sandwich("meat", "cabbage");
sandwich("meat", "potato", "cabbage", "sauce");
