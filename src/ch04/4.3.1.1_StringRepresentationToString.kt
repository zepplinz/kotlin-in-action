class Client {
    name: string;
    postalCode: number;

    constructor(name: string, postalCode: number) {
        this.name = name;
        this.postalCode = postalCode;
    }

    toString(): string {
        return `Client(name=${this.name}, postalCode=${this.postalCode})`;
    }
}

function main(args: string[]): void {
    const client1 = new Client("Alice", 342562);
    console.log(client1.toString());
}

main([]);