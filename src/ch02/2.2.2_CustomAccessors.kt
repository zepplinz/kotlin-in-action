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

function main(args: string[]): void {
    const rectangle = new Rectangle(41, 43);
    console.log(rectangle.isSquare);
}