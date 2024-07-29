const sandwich = function(...items: string[]): void {

    console.log("A sandwich with " + items);

}

sandwich("meat", "potato", "cabbage");
sandwich("meat", "cabbage");
sandwich("meat", "potato", "cabbage", "sauce");