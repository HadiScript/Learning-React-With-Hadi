import React, { useEffect, useState } from "react";
import MeraMouseCompo from "./MeraMouse";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <MeraMouseCompo />}
    </div>
  );
};

export default App;
