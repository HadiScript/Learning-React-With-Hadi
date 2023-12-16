import React from "react";
import { useCounters } from "../context";
import { counterActions } from "../actions/counter";

const A = () => {
  const [state, dispatch] = useCounters();
  const { Inc } = counterActions(dispatch);

  return (
    <div>
      counter : {state}
      <br />
      <button onClick={Inc}> Inc </button>
      <button onClick={() => dispatch({ type: "dec", myValue: 100 })}> dec </button>
    </div>
  );
};

export default A;
