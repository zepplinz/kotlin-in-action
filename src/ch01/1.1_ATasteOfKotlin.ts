type Person = {
    name: string;
    age?: number | null;
};

function main() {
    const persons: Person[] = [
        { name: "Alice" },
        { name: "Bob", age: 29 }
    ];

    const oldest = persons.reduce((max, person) => (person.age ?? 0) > (max.age ?? 0) ? person : max, persons[0]);
    console.log(`The oldest is: ${JSON.stringify(oldest)}`);
}

main();