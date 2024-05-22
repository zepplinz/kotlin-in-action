interface Clickable {
    click(): void;
    showOff(): void;
}

interface Focusable {
    setFocus(b: boolean): void;
    showOff(): void;
}

class Button implements Clickable, Focusable {
    click(): void {
        console.log("I was clicked");
    }

    showOff(): void {
        (Clickable.prototype.showOff as () => void).call(this);
        (Focusable.prototype.showOff as () => void).call(this);
    }

    setFocus(b: boolean): void {
        console.log(`I ${b ? "got" : "lost"} focus.`);
    }
}

Clickable.prototype.showOff = function() {
    console.log("I'm clickable!");
};

Focusable.prototype.showOff = function() {
    console.log("I'm focusable!");
};

function main(args: string[]): void {
    const button = new Button();
    button.showOff();
    button.setFocus(true);
    button.click();
}

main([]);