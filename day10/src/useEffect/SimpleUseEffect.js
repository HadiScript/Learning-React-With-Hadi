import React, { useEffect, useState } from "react";

const App = () => {
  const [first, setFirst] = useState(0);
  const [first2, setFirst2] = useState(0);

  // useEffect(() => {
  //   console.log("am render");
  // });

  useEffect(() => {
    console.log("am render");
  }, []);

  useEffect(() => {
    console.log("am render from first");
  }, [first]);

  return (
    <div>
      {first}
      <br />
      <button onClick={() => setFirst(first + 1)}>Inc</button>
      <br />
      {first2}
      <br />
      <button onClick={() => setFirst2(first2 + 1)}>Inc</button>
    </div>
  );
};

export default App;
