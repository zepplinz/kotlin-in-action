// Define a new type for String with a lastChar property
type StringWithLastChar = {
    lastChar: string;
};
// Define a new type for StringBuilder with a lastChar property
type StringBuilderWithLastChar = {
    lastChar: string;
};
// Extend the String prototype to add the lastChar property
Object.defineProperty(String.prototype, 'lastChar', {
    get: function() {
        return this.charAt(this.length - 1);
    }
});
// Extend the StringBuilder (simulated with an array of characters) prototype to add the lastChar property
Object.defineProperty(Array.prototype, 'lastChar', {
    get: function() {
        return this[this.length - 1];
    },
    set: function(value: string) {
        this[this.length - 1] = value;
    }
});
function main(args: string[]) {
    console.log("Kotlin".lastChar);
    let sb: any = ['K', 'o', 't', 'l', 'i', 'n', '?'];
    sb.lastChar = '!';
    console.log(sb.join(''));
}
main([]);