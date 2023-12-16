import React, { createContext, useContext } from "react";

export const GrandContext = createContext();

export const useGrand = () => {
  return useContext(GrandContext);
};

const GrandContextParent = ({ children }) => {
  return <GrandContext.Provider value={{ name: "10000" }}>{children}</GrandContext.Provider>;
};

export default GrandContextParent;
