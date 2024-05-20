function fizzBuzz(i: number): string {
    if (i % 15 === 0) {
        return "FizzBuzz ";
    } else if (i % 3 === 0) {
        return "Fizz ";
    } else if (i % 5 === 0) {
        return "Buzz ";
    } else {
        return `${i} `;
    }
}
function main(): void {
    for (let i = 1; i <= 100; i++) {
        process.stdout.write(fizzBuzz(i));
    }
}
main();