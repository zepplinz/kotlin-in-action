interface Clickable {
    click(): void;
}
class Button implements Clickable {
    click(): void {
        console.log("I was clicked");
    }
}
function main(args: string[]): void {
    new Button().click();
}