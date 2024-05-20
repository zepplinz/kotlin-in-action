// Define a function to parse the path
function parsePath(path: string) {
    // Define a regular expression to match the path
    const regex = /(.+)\/(.+)\.(.+)/;
    // Match the entire path against the regex
    const matchResult = path.match(regex);
    // If there is a match, destructure the result
    if (matchResult) {
        const [_, directory, filename, extension] = matchResult;
        console.log(`Dir: ${directory}, name: ${filename}, ext: ${extension}`);
    }
}

// Main function to call parsePath with a sample path
function main() {
    parsePath("/Users/yole/kotlin-book/chapter.adoc");
}

// Call the main function
main();