import React, { useContext } from "react";
import { FatherContext } from "../App";

const B = () => {
  const { state, setState } = useContext(FatherContext);

  return (
    <div>
      <h3 style={{ color: "#ff002d" }}>Daughter B : {state}</h3>
      <button onClick={() => setState(state + 1)}>Inc</button>
    </div>
  );
};

export default B;
