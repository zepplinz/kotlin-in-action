namespace ch04.Button1 {
  interface State extends Serializable {}
  interface View {
    getCurrentState(): State;
    restoreState(state: State): void;
  }
  class Button implements View {
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
  interface Serializable {}
}