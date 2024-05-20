// Define the Rectangle class
class Rectangle {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    get isSquare(): boolean {
        return this.height === this.width;
    }
}

// Function to create a random rectangle
function createRandomRectangle(): Rectangle {
    const random = Math.random;
    const height = Math.floor(random() * 100);
    const width = Math.floor(random() * 100);
    return new Rectangle(height, width);
}