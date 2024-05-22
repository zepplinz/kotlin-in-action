class User {
    nickname: string;
    isSubscribed: boolean;

    constructor(nickname: string, isSubscribed: boolean = true) {
        this.nickname = nickname;
        this.isSubscribed = isSubscribed;
    }
}

function main() {
    const alice = new User("Alice");
    console.log(alice.isSubscribed);
    const bob = new User("Bob", false);
    console.log(bob.isSubscribed);
    const carol = new User("Carol", false);
    console.log(carol.isSubscribed);
}

main();