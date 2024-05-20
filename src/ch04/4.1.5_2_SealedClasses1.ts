type Expr = 
    | { type: 'Num', value: number }
    | { type: 'Sum', left: Expr, right: Expr };
function eval(e: Expr): number {
    switch (e.type) {
        case 'Num':
            return e.value;
        case 'Sum':
            return eval(e.left) + eval(e.right);
    }
}
function main() {
    console.log(eval({ type: 'Sum', left: { type: 'Sum', left: { type: 'Num', value: 1 }, right: { type: 'Num', value: 2 } }, right: { type: 'Num', value: 4 } }));
}