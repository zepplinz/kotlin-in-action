import { createRandomRectangle } from './geometry/shapes';
function main(args: string[]): void {
    console.log(createRandomRectangle().isSquare);
}
main([]);