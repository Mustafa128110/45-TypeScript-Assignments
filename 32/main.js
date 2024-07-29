var current_users = ["Alice", "Bob", "Charlie", "David", "Ezekiel"];
var new_users = ["alice", "Florence", "Grayson", "Hume", "Isabel", "ezekiel"];
var _loop_1 = function (i) {
    if (current_users.some(function (user) { return user.toLowerCase() === new_users[i].toLowerCase(); })) {
        console.log("Enter a new username.");
    }
    else {
        console.log("Username is available.");
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
