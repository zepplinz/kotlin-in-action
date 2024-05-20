const set: Set<number> = new Set([1, 7, 53]);
const list: number[] = [1, 7, 53];
const map: Map<number, string> = new Map([
    [1, "one"],
    [7, "seven"],
    [53, "fifty-three"]
]);
function main(args: string[]): void {
    console.log(set.constructor.name);
    console.log(list.constructor.name);
    console.log(map.constructor.name);
}
main([]);