// Define a type for the main function arguments
type Args = string[];
// Main function
function main(args: Args): void {
    const strings: string[] = ["first", "second", "fourteenth"];
    console.log(strings[strings.length - 1]);
    
    const numbers: Set<number> = new Set([1, 14, 2]);
    console.log(Math.max(...Array.from(numbers)));
}
// Simulate the main function call with an empty array
main([]);