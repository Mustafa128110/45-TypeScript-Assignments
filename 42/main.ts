let magicians: string[] = ["Eric", "Leo", "Bunny"];

const show_magicians = (magicians: string[]): void => {

    for (let i: number = 0; i < magicians.length; i++) {

        console.log(magicians[i]);

    }

}

function make_great(): void {

    let ne: string[] = [];
    
    for (let i: number = 0; i < magicians.length; i++) {
    
        ne.push("the Great " + magicians[i]);
        magicians[i] = ne[i];
    }

}

make_great();
show_magicians(magicians);