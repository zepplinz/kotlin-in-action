// Define a type for characters
type Char = string;
// Function to check if a character is a letter
function isLetter(c: Char): boolean {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
// Function to check if a character is not a digit
function isNotDigit(c: Char): boolean {
    return !(c >= '0' && c <= '9');
}
// Main function to test the above functions
function main(args: string[]): void {
    console.log(isLetter('q'));
    console.log(isNotDigit('x'));
}
// Call the main function with an empty array as argument
main([]);