// Define a new type for the function argument
type StringArray = string[];
// Extend the String prototype to add the lastChar method
interface String {
    lastChar(): string;
}
String.prototype.lastChar = function(): string {
    return this.charAt(this.length - 1);
};
// Main function
function main(args: StringArray): void {
    console.log("Kotlin".lastChar());
}
// Call the main function with an example argument
main([]);