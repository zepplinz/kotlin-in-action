enum Color {
    RED = "RED",
    ORANGE = "ORANGE",
    YELLOW = "YELLOW",
    GREEN = "GREEN",
    BLUE = "BLUE",
    INDIGO = "INDIGO",
    VIOLET = "VIOLET"
}
interface RGB {
    r: number;
    g: number;
    b: number;
}
const colorValues: { [key in Color]: RGB } = {
    [Color.RED]: { r: 255, g: 0, b: 0 },
    [Color.ORANGE]: { r: 255, g: 165, b: 0 },
    [Color.YELLOW]: { r: 255, g: 255, b: 0 },
    [Color.GREEN]: { r: 0, g: 255, b: 0 },
    [Color.BLUE]: { r: 0, g: 0, b: 255 },
    [Color.INDIGO]: { r: 75, g: 0, b: 130 },
    [Color.VIOLET]: { r: 238, g: 130, b: 238 }
};
function rgb(color: Color): number {
    const { r, g, b } = colorValues[color];
    return (r * 256 + g) * 256 + b;
}
function main() {
    console.log(rgb(Color.BLUE));
}
main();