enum Color {
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    BLUE,
    INDIGO,
    VIOLET
}
function getWarmth(color: Color): string {
    switch (color) {
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
        default:
            return "unknown";
    }
}
function main() {
    console.log(getWarmth(Color.ORANGE));
}
main();