enum Color {
    RED = "RED",
    ORANGE = "ORANGE",
    YELLOW = "YELLOW",
    GREEN = "GREEN",
    BLUE = "BLUE",
    INDIGO = "INDIGO",
    VIOLET = "VIOLET"
}
function getWarmth(color: Color): string {
    switch(color) {
        case Color.RED:
        case Color.ORANGE:
        case Color.YELLOW:
            return "warm";
        case Color.GREEN:
            return "neutral";
        case Color.BLUE:
        case Color.INDIGO:
        case Color.VIOLET:
            return "cold";
    }
}
function main(args: string[]): void {
    console.log(getWarmth(Color.ORANGE));
}