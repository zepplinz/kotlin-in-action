// Define a new type for Client
type Client = {
    name: string;
    postalCode: number;
};
// Main function
function main() {
    const client1: Client = { name: "Alice", postalCode: 342562 };
    const client2: Client = { name: "Alice", postalCode: 342562 };
    console.log(client1.name === client2.name && client1.postalCode === client2.postalCode);
}
// Call the main function
main();