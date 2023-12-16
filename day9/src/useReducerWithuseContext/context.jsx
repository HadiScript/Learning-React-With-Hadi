import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext();

export const useCounters = () => {
  return useContext(CounterContext);
};

const starter = 100;

const staterReducer = (state, action) => {
  if (action.type === "inc") {
    return state + action.myValue;
  }
  if (action.type === "dec") {
    return state - action.myValue;
  } else {
    return state - 100;
  }
};

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(staterReducer, starter);

  return <CounterContext.Provider value={[state, dispatch]}>{children}</CounterContext.Provider>;
};

export default CounterContextProvider;
