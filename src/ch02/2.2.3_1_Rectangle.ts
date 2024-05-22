package geometry.shapes
import java.util.Random
class Rectangle(val height: Int, val width: Int) {
    val isSquare: Boolean
        get() = height == width
}
fun createRandomRectangle(): Rectangle {
    val random = Random()
    return Rectangle(random.nextInt(), random.nextInt())
}
namespace geometry.shapes {
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
function createRandomRectangle(): Rectangle {
    const random = Math.random;
    return new Rectangle(Math.floor(random() * 100), Math.floor(random() * 100));
}
}