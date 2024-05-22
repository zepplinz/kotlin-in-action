// Define the User interface
interface User {
    nickname: string;
}

// Function to get Facebook name
function getFacebookName(accountId: number): string {
    return `fb:${accountId}`;
}

// Class for PrivateUser implementing User interface
class PrivateUser implements User {
    constructor(public nickname: string) {}
}

// Class for SubscribingUser implementing User interface
class SubscribingUser implements User {
    constructor(public email: string) {}

    get nickname(): string {
        return this.email.substring(0, this.email.indexOf('@'));
    }
}

// Class for FacebookUser implementing User interface
class FacebookUser implements User {
    public nickname: string;

    constructor(public accountId: number) {
        this.nickname = getFacebookName(accountId);
    }
}

// Main function to test the classes
function main() {
    console.log(new PrivateUser("test@kotlinlang.org").nickname);
    console.log(new SubscribingUser("test@kotlinlang.org").nickname);
}

// Execute the main function
main();