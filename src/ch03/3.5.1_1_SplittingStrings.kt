// Define the function to split the string
function main(args: string[]): void {
    console.log("12.345-6.A".split(/\.|-/));
}
// Call the function with an example argument
main(["12.345-6.A"]);