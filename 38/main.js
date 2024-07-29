var describe_city = function (name, country) {
    if (country === void 0) { country = "Pakistan"; }
    return name + " is in " + country;
};
console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("London", "England"));
