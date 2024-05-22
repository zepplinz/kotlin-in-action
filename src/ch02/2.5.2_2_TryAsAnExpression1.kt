import { BufferedReader, StringReader } from 'some-library';
function readNumber(reader: BufferedReader): void {
    let number: number | null = null;
    try {
        number = parseInt(reader.readLine(), 10);
    } catch (e) {
        if (e instanceof NumberFormatException) {
            number = null;
        } else {
            throw e;
        }
    }
    console.log(number);
}
function main(args: string[]): void {
    const reader = new BufferedReader(new StringReader("not a number"));
    readNumber(reader);
}