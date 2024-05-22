// Define a new type for the arguments
type Args = string[];
// Main function
function main(args: Args): void {
    const name = args.length > 0 ? args[0] : "Kotlin";
    console.log(`Hello, ${name}!`);
}