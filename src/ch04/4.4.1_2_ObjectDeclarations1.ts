type Person = {
    name: string;
};
class NameComparator {
    static compare(p1: Person, p2: Person): number {
        return p1.name.localeCompare(p2.name);
    }
}
function main() {
    const persons: Person[] = [{ name: "Bob" }, { name: "Alice" }];
    console.log(persons.sort(NameComparator.compare));
}
main();