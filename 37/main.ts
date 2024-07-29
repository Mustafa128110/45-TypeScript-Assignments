const make_shirt = function(size: unknown = "large", message: string = "I love TypeScript"): string {

    return "size of shirt: " + size + "\nmessage to be printed: " + message;
    
};

console.log(make_shirt(30, "Hello World!"));
console.log(make_shirt());