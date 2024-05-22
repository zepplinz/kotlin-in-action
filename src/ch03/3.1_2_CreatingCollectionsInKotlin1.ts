// Define a type for the main function arguments
type Args = string[];
// Define a function to get the last element of an array
function last<T>(array: T[]): T | undefined {
    return array[array.length - 1];
}
// Define a function to get the maximum element of a set
function max(set: Set<number>): number | undefined {
    let maxValue: number | undefined = undefined;
    set.forEach(value => {
        if (maxValue === undefined || value > maxValue) {
            maxValue = value;
        }
    });
    return maxValue;
}
// Main function
function main(args: Args): void {
    const strings: string[] = ["first", "second", "fourteenth"];
    console.log(last(strings));
    const numbers: Set<number> = new Set([1, 14, 2]);
    console.log(max(numbers));
}
// Call the main function with an empty array as arguments
main([]);