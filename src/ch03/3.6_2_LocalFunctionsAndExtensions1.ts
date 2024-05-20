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
    // Function to validate user fields
    function validate(user: User, value: string, fieldName: string) {
        if (value.length === 0) {
            throw new Error(`Can't save user ${user.id}: empty ${fieldName}`);
        }
    }
    validate(user, user.name, "Name");
    validate(user, user.address, "Address");
    // Save user to the database
}
// Main function to execute the saveUser function
function main() {
    saveUser(new User(1, "", ""));
}
// Execute the main function
main();