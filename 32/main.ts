let current_users: string[] = ["Alice", "Bob", "Charlie", "David", "Ezekiel"];
let new_users: string[] = ["alice", "Florence", "Grayson", "Hume", "Isabel", "ezekiel"];

for (let i: number = 0; i < new_users.length; i++) {
    if (current_users.some(user => user.toLowerCase() === new_users[i].toLowerCase())) {
        console.log("Enter a new username.");
    } else {
        console.log("Username is available.");
    }
}