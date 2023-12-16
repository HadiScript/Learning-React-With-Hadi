import React from "react";
import A from "../screens/A";
import B from "../screens/B";

const CenteralCol = ({ currentPage }) => {
  return (
    <>
      {currentPage === "A" && <A />}
      {currentPage === "B" && <B />}
    </>
  );
};

export default CenteralCol;
