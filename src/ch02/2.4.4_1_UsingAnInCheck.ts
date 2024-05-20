type Char = string;
function isLetter(c: Char): boolean {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
}
function isNotDigit(c: Char): boolean {
    return !(c >= '0' && c <= '9');
}
function main(args: string[]): void {
    console.log(isLetter('q'));
    console.log(isNotDigit('x'));
}
main([]);