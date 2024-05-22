import * as readline from 'readline';
import { StringDecoder } from 'string_decoder';
function readNumber(reader: readline.Interface) {
    reader.question('', (input: string) => {
        const number = (() => {
            try {
                return parseInt(input);
            } catch (e) {
                if (e instanceof Error && e.name === 'NumberFormatException') {
                    return null;
                }
                throw e;
            }
        })();
        if (number !== null) {
            console.log(number);
        }
    });
}
function main() {
    const reader = readline.createInterface({
        input: new StringDecoder('utf-8').end('not a number'),
        output: process.stdout
    });
    readNumber(reader);
}
main();