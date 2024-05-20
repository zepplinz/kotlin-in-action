// Define the Client type
type Client = {
    name: string;
    postalCode: number;
};
// Function to create a new Client object
function createClient(name: string, postalCode: number): Client {
    return { name, postalCode };
}
// Function to copy a Client object with a new postalCode
function copyClient(client: Client, newPostalCode: number): Client {
    return { ...client, postalCode: newPostalCode };
}
// Main function
function main() {
    const bob: Client = createClient("Bob", 973293);
    console.log(copyClient(bob, 382555));
}
// Execute the main function
main();