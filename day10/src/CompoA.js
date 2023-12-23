import React, { useEffect } from "react";

let ComponenntReRender = 1;

const CompoA = () => {


  useEffect(() => {
    ComponenntReRender++;
  });

  return <div>render count : {ComponenntReRender}</div>;
};

export default CompoA;
