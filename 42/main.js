var magicians = ["Eric", "Leo", "Bunny"];
var show_magicians = function (magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
};
function make_great(magicians) {
    var ne = [];
    for (var i = 0; i < magicians.length; i++) {
        ne.push("the Great " + magicians[i]);
        magicians[i] = ne[i];
    }
}
make_great(magicians);
show_magicians(magicians);
