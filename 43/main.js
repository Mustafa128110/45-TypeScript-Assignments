var magicians = ["Eric", "Leo", "Bunny"];
var show_magicians = function (magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
};
function make_great() {
    var ne = [];
    for (var i = 0; i < magicians.length; i++) {
        ne.push("the Great " + magicians[i]);
    }
    return ne;
}
var great_magicians = make_great();
show_magicians(magicians);
show_magicians(great_magicians);
