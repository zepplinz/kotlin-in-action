// Define a function to get Facebook name
function getFacebookName(accountId: number): string {
    return `fb:${accountId}`;
}
// Define the User class with a private constructor
class User {
    private constructor(public nickname: string) {}
    // Define the companion object as a static class
    static Companion = class {
        static newSubscribingUser(email: string): User {
            return new User(email.substring(0, email.indexOf('@')));
        }
        static newFacebookUser(accountId: number): User {
            return new User(getFacebookName(accountId));
        }
    }
}
// Main function to demonstrate the usage of User class
function main() {
    const subscribingUser = User.Companion.newSubscribingUser("bob@gmail.com");
    const facebookUser = User.Companion.newFacebookUser(4);
    console.log(subscribingUser.nickname);
}
// Call the main function
main();