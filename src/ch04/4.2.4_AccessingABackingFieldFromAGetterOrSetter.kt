// Define the User class with a constructor and a private field for address
class User {
    name: string;
    private _address: string = "unspecified";

    constructor(name: string) {
        this.name = name;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        console.log(`
            Address was changed for ${this.name}:
            "${this._address}" -> "${value}".`.trim());
        this._address = value;
    }
}

// Main function to create a User instance and change the address
function main() {
    const user = new User("Alice");
    user.address = "Elsenheimerstrasse 47, 80687 Muenchen";
}

// Call the main function
main();