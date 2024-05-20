// Define the User interface
interface User {
    email: string;
    nickname: string;
}
// Implement the User interface
class UserImpl implements User {
    email: string;
    constructor(email: string) {
        this.email = email;
    }
    get nickname(): string {
        return this.email.substring(0, this.email.indexOf('@'));
    }
}