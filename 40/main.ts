const make_album = function(name: string, title: string, tracks?: number): {artistName: string, albumTitle: string, numberOfTracks?: number} {

    if (tracks) {
        return {
            artistName: name,
            albumTitle: title,
            numberOfTracks: tracks
        }
    } else {
        return {
            artistName: name,
            albumTitle: title
        }
    }

};

let a = make_album("Eminem", "Summer");
let b = make_album("Snoop Dogg", "Winter", 6);
let c = make_album("Billy Eilish", "Hello");

console.log(a);
console.log(b);
console.log(c);