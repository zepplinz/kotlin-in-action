enum CharacterType {
    DIGIT = "It's a digit!",
    LETTER = "It's a letter!",
    UNKNOWN = "I don't know…​"
}

function recognize(c: string): CharacterType {
    if (c >= '0' && c <= '9') {
        return CharacterType.DIGIT;
    } else if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
        return CharacterType.LETTER;
    } else {
        return CharacterType.UNKNOWN;
    }
}

function main(args: string[]): void {
    console.log(recognize('8'));
}

main([]);