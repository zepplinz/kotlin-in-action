// Define the User class
class User {
    id: number;
    name: string;
    address: string;
    constructor(id: number, name: string, address: string) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
// Function to save a user
function saveUser(user: User) {
    function validate(value: string, fieldName: string) {
        if (value.length === 0) {
            throw new Error(`Can't save user ${user.id}: empty ${fieldName}`);
        }
    }
    validate(user.name, "Name");
    validate(user.address, "Address");
    // Save user to the database
}
// Main function
function main() {
    saveUser(new User(1, "", ""));
}
// Execute main function
main();