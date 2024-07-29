var make_shirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    return "size of shirt: " + size + "\nmessage to be printed: " + message;
};
console.log(make_shirt(30, "Hello World!"));
console.log(make_shirt());
