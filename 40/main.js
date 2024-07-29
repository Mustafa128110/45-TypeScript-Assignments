var make_album = function (name, title, tracks) {
    if (tracks) {
        return {
            artistName: name,
            albumTitle: title,
            numberOfTracks: tracks
        };
    }
    else {
        return {
            artistName: name,
            albumTitle: title
        };
    }
};
var a = make_album("Eminem", "Summer");
var b = make_album("Snoop Dogg", "Winter", 6);
var c = make_album("Billy Eilish", "Hello");
console.log(a);
console.log(b);
console.log(c);
