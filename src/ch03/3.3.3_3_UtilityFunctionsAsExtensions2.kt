// UtilityFunctionsAsExtensions2.ts
function joinToString<T>(
    collection: T[],
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
function join(
    collection: string[],
    separator: string = ", ",
    prefix: string = "",
    postfix: string = ""
): string {
    return joinToString(collection, separator, prefix, postfix);
}
function main(args: string[]): void {
    console.log(join(["one", "two", "eight"], " "));
}
main([]);