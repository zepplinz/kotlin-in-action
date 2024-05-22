namespace strings {
    String.prototype.lastChar = function(): string {
        return this.charAt(this.length - 1);
    }
}
function main(args: string[]): void {
    console.log("Kotlin".lastChar());
}