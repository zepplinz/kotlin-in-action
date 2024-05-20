// Define a generic type for the joinToString function
type JoinToStringOptions = {
    separator?: string;
    prefix?: string;
    postfix?: string;
};
// Extend the Array prototype to include the joinToString method
Array.prototype.joinToString = function<T>(
    this: T[],
    options: JoinToStringOptions = {}
): string {
    const { separator = ", ", prefix = "", postfix = "" } = options;
    let result = prefix;
    this.forEach((element, index) => {
        if (index > 0) result += separator;
        result += element;
    });
    result += postfix;
    return result;
};
// Main function to demonstrate the joinToString method
function main() {
    const list = [1, 2, 3];
    console.log(list.joinToString({
        separator: "; ",
        prefix: "(",
        postfix: ")"
    }));
}
// Execute the main function
main();