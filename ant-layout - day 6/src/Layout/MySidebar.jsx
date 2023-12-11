import React from "react";

const MySidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ borderRight: currentPage === "A" ? "1px solid purple" : "" }} onClick={() => setCurrentPage("A")}>
        Screen A
      </div>
      <div style={{ borderRight: currentPage === "B" ? "1px solid purple" : "" }} onClick={() => setCurrentPage("B")}>
        Screen B
      </div>
    </div>
  );
};

export default MySidebar;
