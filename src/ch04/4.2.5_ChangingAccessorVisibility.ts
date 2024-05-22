class LengthCounter {
    private _counter: number = 0;

    get counter(): number {
        return this._counter;
    }

    addWord(word: string): void {
        this._counter += word.length;
    }
}

function main(args: string[]): void {
    const lengthCounter = new LengthCounter();
    lengthCounter.addWord("Hi!");
    console.log(lengthCounter.counter);
}