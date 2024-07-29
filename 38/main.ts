const describe_city = (name: string, country: string = "Pakistan"): string => {

    return name + " is in " + country;
    
};

console.log(describe_city("Karachi"));
console.log(describe_city("Lahore"));
console.log(describe_city("London", "England"));