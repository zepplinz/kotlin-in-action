// Define a User class with a constructor that takes nickname and isSubscribed
class User {
    constructor(public nickname: string, public isSubscribed: boolean = true) {}
}

// Main function to demonstrate the User class
function main() {
    const alice = new User("Alice");
    console.log(alice.isSubscribed);

    const bob = new User("Bob", false);
    console.log(bob.isSubscribed);

    const carol = new User("Carol", false);
    console.log(carol.isSubscribed);
}

// Call the main function
main();