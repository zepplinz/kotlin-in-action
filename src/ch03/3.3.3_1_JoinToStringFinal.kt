// Define a generic type T
type Collection<T> = Array<T>;

// Define the joinToString function
function joinToString<T>(
    collection: Collection<T>,
    separator: string = ", ",
    prefix: string = "",
    postfix: string = ""
): string {
    let result = prefix;

    collection.forEach((element, index) => {
        if (index > 0) result += separator;
        result += element;
    });

    result += postfix;
    return result;
}

// Main function to test joinToString
function main() {
    const list: Collection<number> = [1, 2, 3];
    console.log(joinToString(list, "; ", "(", ")"));
}

// Execute the main function
main();