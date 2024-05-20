// Define a type for the joinToString function parameters
type JoinToStringParams<T> = {
    separator?: string;
    prefix?: string;
    postfix?: string;
};
// Extend the Array prototype to include the joinToString method
Array.prototype.joinToString = function<T>(
    this: T[],
    { separator = ", ", prefix = "", postfix = "" }: JoinToStringParams<T> = {}
): string {
    let result = prefix;

    this.forEach((element, index) => {
        if (index > 0) result += separator;
        result += element;
    });

    result += postfix;
    return result;
};
// Main function
function main(args: string[]) {
    const list = [1, 2, 3];
    console.log(list.joinToString({ separator: " " }));
}
// Execute main function
main([]);