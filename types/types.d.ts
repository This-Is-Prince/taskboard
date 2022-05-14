interface State {}

interface Action {
  type: string;
  payload: any;
}

interface ContextProps {
  appState: State;
  dispatch: Dispatch<Action>;
}

export { State, Action, ContextProps };
