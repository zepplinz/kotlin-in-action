// Define a function to recognize characters
function recognize(c: string): string {
    if (c >= '0' && c <= '9') {
        return "It's a digit!";
    } else if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
        return "It's a letter!";
    } else {
        return "I don't know…​";
    }
}
// Main function to test the recognize function
function main(args: string[]): void {
    console.log(recognize('8'));
}