// Define the User class
class User {
    constructor(public id: number, public name: string, public address: string) {}
}
// Extend the User class with a validateBeforeSave method
function validateBeforeSave(user: User) {
    function validate(value: string, fieldName: string) {
        if (value.length === 0) {
            throw new Error(`Can't save user ${user.id}: empty ${fieldName}`);
        }
    }
    validate(user.name, "Name");
    validate(user.address, "Address");
}
// Function to save the user
function saveUser(user: User) {
    validateBeforeSave(user);
    // Save user to the database
}
// Main function to execute the saveUser function
function main() {
    saveUser(new User(1, "", ""));
}
// Execute the main function
main();