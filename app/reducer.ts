import { useReducer, Reducer } from "react";
import { Action, State } from "../types/types";
import state from "./state";

const reducer: Reducer<State, Action> = (state, action) => {
  return state;
};

const useGlobalReducer = () => {
  return useReducer(reducer, state);
};
export default useGlobalReducer;
