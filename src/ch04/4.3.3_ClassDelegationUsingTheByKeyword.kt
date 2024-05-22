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

    // Implementing the rest of the Set interface methods
    clear(): void {
        this.innerSet.clear();
    }

    delete(value: T): boolean {
        return this.innerSet.delete(value);
    }

    entries(): IterableIterator<[T, T]> {
        return this.innerSet.entries();
    }

    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void {
        this.innerSet.forEach(callbackfn, thisArg);
    }

    has(value: T): boolean {
        return this.innerSet.has(value);
    }

    keys(): IterableIterator<T> {
        return this.innerSet.keys();
    }

    values(): IterableIterator<T> {
        return this.innerSet.values();
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this.innerSet[Symbol.iterator]();
    }

    get [Symbol.toStringTag](): string {
        return 'CountingSet';
    }
}

function main() {
    const cset = new CountingSet<number>();
    cset.addAll([1, 1, 2]);
    console.log(`${cset.objectsAdded} objects were added, ${cset.size} remain`);
}

main();