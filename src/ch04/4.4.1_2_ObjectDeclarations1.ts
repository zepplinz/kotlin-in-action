// Define the Person class
class Person {
    constructor(public name: string) {}
}
// Define the NameComparator object
const NameComparator: Comparator<Person> = {
    compare(p1: Person, p2: Person): number {
        return p1.name.localeCompare(p2.name);
    }
};
// Define the Comparator interface
interface Comparator<T> {
    compare(a: T, b: T): number;
}
// Main function
function main() {
    const persons: Person[] = [new Person("Bob"), new Person("Alice")];
    console.log(persons.sort(NameComparator.compare));
}
// Execute the main function
main();