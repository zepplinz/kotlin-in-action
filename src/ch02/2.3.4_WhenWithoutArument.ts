// Define the Color enum
enum Color {
    RED,
    YELLOW,
    BLUE,
    VIOLET,
    ORANGE,
    GREEN,
    INDIGO
}

// Function to mix colors
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

// Main function to test the mixOptimized function
function main() {
    console.log(mixOptimized(Color.BLUE, Color.YELLOW));
}

// Call the main function
main();