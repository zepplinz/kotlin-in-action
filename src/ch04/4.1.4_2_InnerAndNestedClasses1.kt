// Define the Outer class
class Outer {
    // Define the Inner class within Outer
    Inner = class {
        // Method to get the reference to the Outer class instance
        getOuterReference(): Outer {
            return this.outer;
        }
        constructor(private outer: Outer) {}
    }
}