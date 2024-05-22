const kotlinLogo: string = `| //
                   .|//
                   .|/ \\`;
function main(args: string[]): void {
    console.log(kotlinLogo.trimMargin("."));
}
String.prototype.trimMargin = function(marginPrefix: string): string {
    return this.split('\n').map(line => {
        if (line.startsWith(marginPrefix)) {
            return line.substring(marginPrefix.length);
        }
        return line;
    }).join('\n');
};