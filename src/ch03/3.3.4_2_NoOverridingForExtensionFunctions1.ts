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

function showOff(view: View): void {
    if (view instanceof Button) {
        console.log("I'm a button!");
    } else {
        console.log("I'm a view!");
    }
}

function main(args: string[]): void {
    const view: View = new Button();
    showOff(view);
}

main([]);