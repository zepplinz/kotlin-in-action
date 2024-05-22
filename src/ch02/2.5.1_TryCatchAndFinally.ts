import { StringReader, BufferedReader } from 'some-library';
function readNumber(reader: BufferedReader): number | null {
    try {
        const line = reader.readLine();
        return parseInt(line, 10);
    } catch (e) {
        if (e instanceof NumberFormatException) {
            return null;
        } else {
            throw e;
        }
    } finally {
        reader.close();
    }
}
function main(args: string[]): void {
    const reader = new BufferedReader(new StringReader("239"));
    console.log(readNumber(reader));
}