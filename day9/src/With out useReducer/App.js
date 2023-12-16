import React, { useState } from "react";

import Counter from "./Counter";

const initValue = 0;

const App = () => {
  const [count, setCount] = useState(initValue);

  const Inc = () => setCount(count + 1);
  const Dec = () => setCount(count - 1);

  const IncBy2 = () => setCount(count + 2);
  const DecBy2 = () => setCount(count - 2);

  return (
    <div>
      <Counter counter={count} Inc={Inc} Dec={Dec} IncBy2={IncBy2} DecBy2={DecBy2} />
    </div>
  );
};

export default App;
