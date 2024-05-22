type BinaryReps = Map<string, string>;
function main(): void {
    const binaryReps: BinaryReps = new Map<string, string>();
    for (let c = 'A'.charCodeAt(0); c <= 'F'.charCodeAt(0); c++) {
        const binary = c.toString(2);
        binaryReps.set(String.fromCharCode(c), binary);
    }
    for (const [letter, binary] of binaryReps) {
        console.log(`${letter} = ${binary}`);
    }
}
main();