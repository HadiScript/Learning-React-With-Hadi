import React, { useState } from "react";

const App = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8];
  const [first, setFirst] = useState(arr);
  const [second, setSecond] = useState([]);

  const filterdHandler = () => setSecond(first.filter((x) => x <= 5));

  return (
    <div>
      Map:
      {first.map((x, index) => (
        <span key={index}>{x}</span>
      ))}
      <br />
      Filter:
      {second.map((x, index) => (
        <span key={index}>{x}</span>
      ))}
      <br />
      <button onClick={filterdHandler}>Filter the array</button>
      <br />
      Slice:
      {first.slice(0, 5).map((x, index) => (
        <span key={index}>{x}</span>
      ))}
      <br />
    </div>
  );
};

export default App;
