class CountingSet<T> implements Set<T> {
    private innerSet: Set<T>;
    private _objectsAdded: number;

    constructor(innerSet: Set<T> = new Set<T>()) {
        this.innerSet = innerSet;
        this._objectsAdded = 0;
    }

    get objectsAdded(): number {
        return this._objectsAdded;
    }

    add(element: T): this {
        this._objectsAdded++;
        this.innerSet.add(element);
        return this;
    }

    addAll(elements: T[]): this {
        this._objectsAdded += elements.length;
        elements.forEach(element => this.innerSet.add(element));
        return this;
    }

    get size(): number {
        return this.innerSet.size;
    }

    has(element: T): boolean {
        return this.innerSet.has(element);
    }

    delete(element: T): boolean {
        return this.innerSet.delete(element);
    }

    clear(): void {
        this.innerSet.clear();
    }

    values(): IterableIterator<T> {
        return this.innerSet.values();
    }

    entries(): IterableIterator<[T, T]> {
        return this.innerSet.entries();
    }

    keys(): IterableIterator<T> {
        return this.innerSet.keys();
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this.innerSet[Symbol.iterator]();
    }

    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void {
        this.innerSet.forEach(callbackfn, thisArg);
    }
}

function main() {
    const cset = new CountingSet<number>();
    cset.addAll([1, 1, 2]);
    console.log(`${cset.objectsAdded} objects were added, ${cset.size} remain`);
}

main();