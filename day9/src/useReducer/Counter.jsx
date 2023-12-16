import React from "react";

const Counter = ({ state, dispatch }) => {
  return (
    <div>
      <h5> counter : {state} </h5>
      <br />
      <button 
        onClick={() => dispatch({type : "inc", myValue : 100})}
      >
        Inc
       </button>

       <button 
        onClick={() => dispatch({type : "dec", myValue : 100})}
      >
        Dec
       </button>
    </div>
  );
};

export default Counter;
