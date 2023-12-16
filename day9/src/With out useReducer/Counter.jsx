import React from "react";

const Counter = ({ counter, Inc, Dec, IncBy2, DecBy2 }) => {
  return (
    <div>
      counter : {counter}
      <br />
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Dec</button>
      <button onClick={IncBy2}>Inc By 2</button>
      <button onClick={DecBy2}>Dec By 2</button>
    </div>
  );
};

export default Counter;
