enum Color {
    RED,
    YELLOW,
    BLUE,
    VIOLET,
    ORANGE,
    GREEN,
    INDIGO
}
function mix(c1: Color, c2: Color): Color {
    const colorSet = new Set([c1, c2]);
    if (colorSet.has(Color.RED) && colorSet.has(Color.YELLOW)) return Color.ORANGE;
    if (colorSet.has(Color.YELLOW) && colorSet.has(Color.BLUE)) return Color.GREEN;
    if (colorSet.has(Color.BLUE) && colorSet.has(Color.VIOLET)) return Color.INDIGO;
    throw new Error("Dirty color");
}
function main() {
    console.log(mix(Color.BLUE, Color.YELLOW));
}
main();