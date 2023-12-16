import React from "react";
import CounterContextProvider from "./context";
import A from "./compons/A";

const App = () => {
  return (
    <CounterContextProvider>
      <A />
    </CounterContextProvider>
  );
};

export default App;
