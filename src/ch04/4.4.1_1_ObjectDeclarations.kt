// Define the File type
type File = {
    path: string;
};
// Define the CaseInsensitiveFileComparator object
const CaseInsensitiveFileComparator = {
    compare(file1: File, file2: File): number {
        return file1.path.localeCompare(file2.path, undefined, { sensitivity: 'accent' });
    }
};
// Main function
function main() {
    console.log(CaseInsensitiveFileComparator.compare(
        { path: "/User" }, { path: "/user" }));
    const files: File[] = [{ path: "/Z" }, { path: "/a" }];
    console.log(files.sort((a, b) => CaseInsensitiveFileComparator.compare(a, b)));
}
// Execute main function
main();