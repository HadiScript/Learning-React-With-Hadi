import React, { useCallback, useState } from "react";

const mySet = new Set();

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const incA = useCallback(() => {
    console.log("from a");
    setA(a + 1);
  }, [a]); // when ever a change, function a will recreate

  const incB = useCallback(() => {
    console.log("from b");
    setB(b + 1);
  }, [b]);

  mySet.add(incA);
  mySet.add(incB);

  console.log("My Set", mySet);

  return (
    <div>
      A : {a}
      <button onClick={incA}>inc A</button>
      <hr />B : {b}
      <button onClick={incB}>inc B</button>
    </div>
  );
};

export default App;
