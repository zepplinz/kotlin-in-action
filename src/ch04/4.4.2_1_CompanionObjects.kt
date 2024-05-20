namespace ch04.ex4_2_1_CompanionObjects {
    class A {
        static bar() {
            console.log("Companion object called");
        }
    }
}
function main(args: string[]) {
    ch04.ex4_2_1_CompanionObjects.A.bar();
}