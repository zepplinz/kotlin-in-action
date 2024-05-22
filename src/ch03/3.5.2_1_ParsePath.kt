function parsePath(path: string): void {
    const directory = path.substring(0, path.lastIndexOf("/"));
    const fullName = path.substring(path.lastIndexOf("/") + 1);

    const fileName = fullName.substring(0, fullName.lastIndexOf("."));
    const extension = fullName.substring(fullName.lastIndexOf(".") + 1);

    console.log(`Dir: ${directory}, name: ${fileName}, ext: ${extension}`);
}

function main(args: string[]): void {
    parsePath("/Users/yole/kotlin-book/chapter.adoc");
}