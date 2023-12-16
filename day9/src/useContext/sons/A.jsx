import React, { useContext } from "react";
import { FatherContext } from "../App";
import { GrandContext, useGrand } from "../GrandContext";

const A = () => {
  const { state, setState } = useContext(FatherContext);
  // const { name } = useContext(GrandContext);
  const { name } = useGrand();

  return (
    <div>
      {name}
      <h3 style={{ color: "blueviolet" }}>Son A</h3>
      <button onClick={() => setState(state + 100)}>Inc By A</button>
    </div>
  );
};

export default A;
