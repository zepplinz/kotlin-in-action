// Define a function to mimic Kotlin's main function
function main(args: string[]): void {
    // Create a list with the initial element "args: " and spread the args array
    const list = ["args: ", ...args];
    // Print the list to the console
    console.log(list);
}
// Call the main function with an example argument array
main(["arg1", "arg2"]);