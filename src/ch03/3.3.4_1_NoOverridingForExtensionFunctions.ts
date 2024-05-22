class View {
    click(): void {
        console.log("View clicked");
    }
}
class Button extends View {
    click(): void {
        console.log("Button clicked");
    }
}
function main(args: string[]): void {
    const view: View = new Button();
    view.click();
}
main([]);