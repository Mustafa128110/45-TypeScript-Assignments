let username: string[] = ["Admin", "Eric", "Charles", "Charlie", "Samantha", "Rachel"];
username = [];

if (username.length === 0) {
    console.log("We need to find some users!")
} else {

    for (let i: number = 0; i < username.length; i++) {

        if (username[i] === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        } else {
            console.log("Hello " + username[i] + ", thank you for logging in again.");
        }

    }
}

