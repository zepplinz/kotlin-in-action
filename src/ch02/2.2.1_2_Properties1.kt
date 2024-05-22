// Define a new type for Person
type Person = {
    name: string;
    isMarried: boolean;
};
// Main function
function main() {
    const person: Person = { name: "Bob", isMarried: true };
    console.log(person.name);
    console.log(person.isMarried);
}
// Call the main function
main();