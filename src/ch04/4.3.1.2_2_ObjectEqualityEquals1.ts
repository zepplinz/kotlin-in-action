type Client = {
    name: string;
    postalCode: number;
};
class ClientClass {
    name: string;
    postalCode: number;
    constructor(name: string, postalCode: number) {
        this.name = name;
        this.postalCode = postalCode;
    }
    equals(other: any): boolean {
        if (other == null || !(other instanceof ClientClass))
            return false;
        return this.name === other.name &&
               this.postalCode === other.postalCode;
    }
    toString(): string {
        return `Client(name=${this.name}, postalCode=${this.postalCode})`;
    }
}
function main() {
    const processed = new Set<ClientClass>();
    processed.add(new ClientClass("Alice", 342562));
    console.log(processed.has(new ClientClass("Alice", 342562)));
}
main();