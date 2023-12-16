import React, { useReducer } from "react";
import Counter from "./Counter";

const starter = 100;

const staterReducer = (state, action) => {
  if (action.type === "inc") {
    return state + action.myValue;
  }
  if (action.type === "dec") {
    return state - action.myValue;
  } else {
    return state - 100;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(staterReducer, starter);

  return (
    <div>
      <Counter state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
