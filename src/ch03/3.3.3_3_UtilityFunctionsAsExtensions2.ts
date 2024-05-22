// UtilityFunctionsAsExtensions2.ts
type JoinOptions = {
    separator?: string;
    prefix?: string;
    postfix?: string;
};
function joinToString<T>(collection: T[], options: JoinOptions = {}): string {
    const { separator = ", ", prefix = "", postfix = "" } = options;
    let result = prefix;
    collection.forEach((element, index) => {
        if (index > 0) result += separator;
        result += element;
    });
    result += postfix;
    return result;
}
function join(collection: string[], options: JoinOptions = {}): string {
    return joinToString(collection, options);
}
function main(args: string[]): void {
    console.log(join(["one", "two", "eight"], { separator: " " }));
}
main([]);