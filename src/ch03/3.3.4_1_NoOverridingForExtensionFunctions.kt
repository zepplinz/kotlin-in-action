// Define a base class View
class View {
    click(): void {
        console.log("View clicked");
    }
}
// Define a subclass Button that extends View
class Button extends View {
    click(): void {
        console.log("Button clicked");
    }
}
// Main function to demonstrate polymorphism
function main(args: string[]): void {
    const view: View = new Button();
    view.click();
}
// Call the main function with an empty array as argument
main([]);