// Define the Person class with properties name and isMarried
class Person {
    name: string;
    isMarried: boolean;

    constructor(name: string, isMarried: boolean) {
        this.name = name;
        this.isMarried = isMarried;
    }
}

// Main function to create a Person instance and print its properties
function main() {
    const person = new Person("Bob", true);
    console.log(person.name);
    console.log(person.isMarried);
}

// Call the main function
main();