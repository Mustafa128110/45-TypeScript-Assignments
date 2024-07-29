const show_magicians = (magicians: string[]): void => {

    for (let i: number = 0; i < magicians.length; i++) {

        console.log(magicians[i]);

    }

}

let magicians: string[] = ["Eric", "Leo", "Bunny"];

show_magicians(magicians);