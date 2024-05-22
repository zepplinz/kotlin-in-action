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
// Extend the StringBuilder prototype to add the lastChar property
Object.defineProperty(String.prototype, 'lastChar', {
    get: function() {
        return this.charAt(this.length - 1);
    },
    set: function(value: string) {
        this.setCharAt(this.length - 1, value);
    }
});
// Main function
function main() {
    console.log("Kotlin".lastChar);
    let sb = new StringBuilder("Kotlin?");
    sb.lastChar = '!';
    console.log(sb.toString());
}
// Call the main function
main();