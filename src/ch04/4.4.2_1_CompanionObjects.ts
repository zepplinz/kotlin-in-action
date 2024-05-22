class A {
    static bar() {
        console.log("Companion object called");
    }
}
function main(args: string[]) {
    A.bar();
}
main([]);