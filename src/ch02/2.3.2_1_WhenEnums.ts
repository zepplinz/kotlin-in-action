enum Color {
    RED = "RED",
    ORANGE = "ORANGE",
    YELLOW = "YELLOW",
    GREEN = "GREEN",
    BLUE = "BLUE",
    INDIGO = "INDIGO",
    VIOLET = "VIOLET"
}

function getMnemonic(color: Color): string {
    switch (color) {
        case Color.RED:
            return "Richard";
        case Color.ORANGE:
            return "Of";
        case Color.YELLOW:
            return "York";
        case Color.GREEN:
            return "Gave";
        case Color.BLUE:
            return "Battle";
        case Color.INDIGO:
            return "In";
        case Color.VIOLET:
            return "Vain";
        default:
            return "";
    }
}

function main(args: string[]): void {
    console.log(getMnemonic(Color.BLUE));
}