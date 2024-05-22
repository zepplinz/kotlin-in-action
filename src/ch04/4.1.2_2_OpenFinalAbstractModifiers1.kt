// Define the Clickable interface
interface Clickable {
    click(): void;
    showOff(): void;
}
// Implement the Clickable interface in the RichButton class
class RichButton implements Clickable {
    click(): void {
        // Implementation of click method
    }
    showOff(): void {
        console.log("I'm clickable!");
    }
}