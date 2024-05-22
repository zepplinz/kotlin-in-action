enum Color {
    RED = "RED",
    YELLOW = "YELLOW",
    BLUE = "BLUE",
    ORANGE = "ORANGE",
    GREEN = "GREEN",
    VIOLET = "VIOLET",
    INDIGO = "INDIGO"
}
function mixOptimized(c1: Color, c2: Color): Color {
    if ((c1 === Color.RED && c2 === Color.YELLOW) || (c1 === Color.YELLOW && c2 === Color.RED)) {
        return Color.ORANGE;
    } else if ((c1 === Color.YELLOW && c2 === Color.BLUE) || (c1 === Color.BLUE && c2 === Color.YELLOW)) {
        return Color.GREEN;
    } else if ((c1 === Color.BLUE && c2 === Color.VIOLET) || (c1 === Color.VIOLET && c2 === Color.BLUE)) {
        return Color.INDIGO;
    } else {
        throw new Error("Dirty color");
    }
}
function main() {
    console.log(mixOptimized(Color.BLUE, Color.YELLOW));
}
main();