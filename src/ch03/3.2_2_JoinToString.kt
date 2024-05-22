function joinToString<T>(
    collection: T[],
    separator: string,
    prefix: string,
    postfix: string
): string {
    let result = prefix;
    collection.forEach((element, index) => {
        if (index > 0) result += separator;
        result += element;
    });
    result += postfix;
    return result;
}
function main() {
    const list = [1, 2, 3];
    console.log(joinToString(list, "; ", "(", ")"));
}