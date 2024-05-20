// Define the User type
type User = {
    id: number;
    name: string;
    address: string;
};
// Function to save a user
function saveUser(user: User): void {
    if (user.name.length === 0) {
        throw new Error(`Can't save user ${user.id}: empty Name`);
    }
    if (user.address.length === 0) {
        throw new Error(`Can't save user ${user.id}: empty Address`);
    }
    // Save user to the database
}
// Main function
function main(): void {
    saveUser({ id: 1, name: "", address: "" });
}
// Execute the main function
main();