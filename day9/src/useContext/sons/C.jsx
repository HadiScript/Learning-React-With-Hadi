import React, { useContext } from "react";
import { MotherContext } from "../App";

const C = () => {
  const [stateByMother, setStateByMother] = useContext(MotherContext);

  return (
    <div>
      <h3 style={{ color: "blueviolet" }}>Son C : {stateByMother}</h3>
    </div>
  );
};

export default C;
