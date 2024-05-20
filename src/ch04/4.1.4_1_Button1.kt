export interface State extends Serializable {}
export interface View {
    getCurrentState(): State;
    restoreState(state: State): void;
}
export class Button implements View {
    getCurrentState(): State {
        return new ButtonState();
    }
    restoreState(state: State): void {
        // ...
    }
}
class ButtonState implements State {
    // ...
}