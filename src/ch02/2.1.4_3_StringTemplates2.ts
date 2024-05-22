// Define the main function
function main(args: string[]): void {
    // Print the greeting message
    console.log(`Hello, ${args.length > 0 ? args[0] : "someone"}!`);
}
// Call the main function with an example argument
main(["World"]);