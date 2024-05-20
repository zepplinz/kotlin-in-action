// Define a new type for File
type File = {
    path: string;
};
// Define a new interface for Comparator
interface Comparator<T> {
    compare(a: T, b: T): number;
}
// Implement the CaseInsensitiveFileComparator object
const CaseInsensitiveFileComparator: Comparator<File> = {
    compare(file1: File, file2: File): number {
        return file1.path.localeCompare(file2.path, undefined, { sensitivity: 'base' });
    }
};
// Main function
function main() {
    console.log(CaseInsensitiveFileComparator.compare(
        { path: "/User" }, { path: "/user" }));
    
    const files: File[] = [{ path: "/Z" }, { path: "/a" }];
    console.log(files.sort(CaseInsensitiveFileComparator.compare));
}
// Execute the main function
main();