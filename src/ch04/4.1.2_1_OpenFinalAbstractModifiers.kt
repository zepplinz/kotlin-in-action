// Define the Clickable interface
interface Clickable {
    click(): void;
    showOff(): void;
}
// Implement the Clickable interface in the RichButton class
class RichButton implements Clickable {
    // Method to disable the button
    disable(): void {}
    // Method to animate the button, can be overridden
    animate(): void {}
    // Override the click method from Clickable interface
    click(): void {}
    // Implement the showOff method from Clickable interface
    showOff(): void {
        console.log("I'm clickable!");
    }
}