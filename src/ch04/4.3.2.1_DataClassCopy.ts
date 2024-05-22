type Client = {
    name: string;
    postalCode: number;
};

function copyClient(client: Client, newPostalCode: number): Client {
    return { ...client, postalCode: newPostalCode };
}

function main() {
    const bob: Client = { name: "Bob", postalCode: 973293 };
    console.log(copyClient(bob, 382555));
}

main();