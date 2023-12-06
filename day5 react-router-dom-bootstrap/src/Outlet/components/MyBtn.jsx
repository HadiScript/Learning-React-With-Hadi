import React from "react";

const MyBtn = ({ children, clickHander }) => {
  return (
    <button onClick={clickHander} style={{ border: "0.01rem solid lightgrey", background: "purple", color: "white", borderRadius: "10px" }}>
      {children}
    </button>
  );
};

export default MyBtn;
