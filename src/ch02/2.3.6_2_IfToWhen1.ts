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
function eval(e: Expr): number {
    if (e instanceof Num) {
        return e.value;
    } else if (e instanceof Sum) {
        return eval(e.right) + eval(e.left);
    } else {
        throw new Error("Unknown expression");
    }
}
function main() {
    console.log(eval(new Sum(new Num(1), new Num(2))));
}
main();