// Define a type for the match result
type MatchResult = {
    directory: string;
    filename: string;
    extension: string;
};
// Function to parse the path
function parsePath(path: string): void {
    const regex = /(.+)\/(.+)\.(.+)/;
    const matchResult = regex.exec(path);
    if (matchResult !== null) {
        const [_, directory, filename, extension] = matchResult;
        console.log(`Dir: ${directory}, name: ${filename}, ext: ${extension}`);
    }
}
// Main function
function main(args: string[]): void {
    parsePath("/Users/yole/kotlin-book/chapter.adoc");
}