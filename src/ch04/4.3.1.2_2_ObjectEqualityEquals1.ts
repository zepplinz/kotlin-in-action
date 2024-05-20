// Define the Client class with properties and methods
class Client {
    name: string;
    postalCode: number;

    constructor(name: string, postalCode: number) {
        this.name = name;
        this.postalCode = postalCode;
    }

    equals(other: any): boolean {
        if (other == null || !(other instanceof Client))
            return false;
        return this.name === other.name &&
               this.postalCode === other.postalCode;
    }

    toString(): string {
        return `Client(name=${this.name}, postalCode=${this.postalCode})`;
    }
}

// Main function to demonstrate the usage of Client class
function main() {
    const processed = new Set<Client>();
    processed.add(new Client("Alice", 342562));
    console.log(processed.has(new Client("Alice", 342562)));
}

// Execute the main function
main();