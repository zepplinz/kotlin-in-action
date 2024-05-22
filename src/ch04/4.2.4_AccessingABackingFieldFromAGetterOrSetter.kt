class User {
    private _address: string = "unspecified";

    constructor(public name: string) {}

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        console.log(`
            Address was changed for ${this.name}:
            "${this._address}" -> "${value}".`.trim());
        this._address = value;
    }
}

function main() {
    const user = new User("Alice");
    user.address = "Elsenheimerstrasse 47, 80687 Muenchen";
}

main();