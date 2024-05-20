// Define the main function
function main(args: string[]): void {
    // Determine the name based on the arguments
    const name: string = args.length > 0 ? args[0] : "Kotlin";
    // Print the greeting message
    console.log(`Hello, ${name}!`);
}
// Example usage
main(["TypeScript"]);