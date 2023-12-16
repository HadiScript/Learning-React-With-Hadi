import React from "react";
import Layout from "./Layout";

const MyHead = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <hr />
      {children}
    </>
  );
};

const B = () => {
  return <>FAQS</>;
};

const App = () => {
  return (
    <>
      {/* <MyHead title={"Headingzzzzzzzzzzzzzz"}>
        <h5>Helo world</h5>
      </MyHead> */}

      <MyHead title={"FAQS"}>
        <B />
      </MyHead>
    </>
  );
};

export default App;
