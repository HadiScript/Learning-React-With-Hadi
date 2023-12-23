// lazy loading (suspense)
// asyc ?
// fetching api

// UI base -> 3, 4 -> 



import React, { memo, useMemo, useState } from "react";
import CompoA from "./CompoA";

const App = () => {
  const [a, setA] = useState(0);

  const incA = () => {
    setA(a + 1);
  };
  // memo()
  const MemoCompo = useMemo(() => {
    return <CompoA />;
  }, []);

  return (
    <div>
      App state from parent App : {a}
      <br />
      <button onClick={incA}>Inc A</button>
      <CompoA />
      <hr />
      <hr />
      <hr />
      {MemoCompo}
    </div>
  );
};

export default App;
