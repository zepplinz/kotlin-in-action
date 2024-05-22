function fizzBuzz(i: number): string {
    if (i % 15 === 0) return "FizzBuzz ";
    if (i % 3 === 0) return "Fizz ";
    if (i % 5 === 0) return "Buzz ";
    return `${i} `;
}
function main(args: string[]): void {
    for (let i = 100; i >= 1; i -= 2) {
        process.stdout.write(fizzBuzz(i));
    }
}
main([]);