function getFacebookName(accountId: number): string {
    return `fb:${accountId}`;
}

class User {
    private constructor(public nickname: string) {}

    static newSubscribingUser(email: string): User {
        return new User(email.substring(0, email.indexOf('@')));
    }

    static newFacebookUser(accountId: number): User {
        return new User(getFacebookName(accountId));
    }
}

function main(args: string[]): void {
    const subscribingUser = User.newSubscribingUser("bob@gmail.com");
    const facebookUser = User.newFacebookUser(4);
    console.log(subscribingUser.nickname);
}