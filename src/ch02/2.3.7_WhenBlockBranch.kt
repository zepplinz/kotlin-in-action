interface Expr {}

class Num implements Expr {
    constructor(public value: number) {}
}

class Sum implements Expr {
    constructor(public left: Expr, public right: Expr) {}
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