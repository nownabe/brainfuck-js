import { reset, run, step } from "actions/interpreter";
import { Action, handleActions } from "redux-actions";
import { Interpreter as State } from "states";

type Payload = State;

const initialState: State = {
  memory: new Array(16).fill(0),
  output: "",
  pointer: 0,
  programCounter: 0,
};

const next = (state: State, action: Action<Payload>) => (action.payload || initialState);

export default handleActions<State, Payload>({
    [run.toString()]: { next },
    [step.toString()]: { next },
    [reset.toString()]: { next: () => initialState },
}, initialState);
