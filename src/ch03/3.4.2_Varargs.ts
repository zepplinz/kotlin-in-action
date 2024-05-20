// Define a function to mimic Kotlin's varargs behavior
function main(...args: string[]): void {
    const list: string[] = ["args: ", ...args];
    console.log(list);
}
// Call the main function with process arguments
main(...process.argv.slice(2));