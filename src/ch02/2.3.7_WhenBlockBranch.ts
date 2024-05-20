interface Expr {}
class Num implements Expr {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
}
class Sum implements Expr {
    left: Expr;
    right: Expr;
    constructor(left: Expr, right: Expr) {
        this.left = left;
        this.right = right;
    }
}
function evalWithLogging(e: Expr): number {
    if (e instanceof Num) {
        console.log(`num: ${e.value}`);
        return e.value;
    } else if (e instanceof Sum) {
        const left = evalWithLogging(e.left);
        const right = evalWithLogging(e.right);
        console.log(`sum: ${left} + ${right}`);
        return left + right;
    } else {
        throw new Error("Unknown expression");
    }
}
function main() {
    console.log(evalWithLogging(new Sum(new Sum(new Num(1), new Num(2)), new Num(4))));
}
main();