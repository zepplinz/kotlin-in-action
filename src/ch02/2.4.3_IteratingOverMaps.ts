type BinaryReps = Map<string, string>;
function main(): void {
    const binaryReps: BinaryReps = new Map<string, string>();
    for (let c = 'A'.charCodeAt(0); c <= 'F'.charCodeAt(0); c++) {
        const char = String.fromCharCode(c);
        const binary = c.toString(2);
        binaryReps.set(char, binary);
    }
    binaryReps.forEach((binary, letter) => {
        console.log(`${letter} = ${binary}`);
    });
}
main();