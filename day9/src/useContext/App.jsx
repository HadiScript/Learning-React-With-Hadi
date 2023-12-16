import React, { createContext, useState } from "react";
import A from "./sons/A";
import B from "./sons/B";
import C from "./sons/C";
import { useGrand } from "./GrandContext";

export const FatherContext = createContext();
export const MotherContext = createContext();

const App = () => {
  const [state, setState] = useState(100);
  const [stateByMother, setStateByMother] = useState(1000);

  return (
    <div>
      <h1>Father </h1>
      <hr />
      <FatherContext.Provider value={{ state, setState }}>
        <A />
        <B />
        <MotherContext.Provider value={[stateByMother, setStateByMother]}>
          <C />
        </MotherContext.Provider>
      </FatherContext.Provider>
    </div>
  );
};

export default App;
