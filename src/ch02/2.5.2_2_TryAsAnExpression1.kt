import * as readline from 'readline';
import { StringDecoder } from 'string_decoder';
function readNumber(reader: readline.Interface) {
const decoder = new StringDecoder('utf8');
reader.question('', (input: string) => {
const number = (() => {
try {
return parseInt(input);
} catch (e) {
if (e instanceof Error && e.name === 'NumberFormatException') {
return null;
}
})();
console.log(number);
});
}
function main() {
const reader = readline.createInterface({
input: process.stdin,
output: process.stdout
});
readNumber(reader);
}
main();