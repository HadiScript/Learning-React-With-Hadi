import React, { useState, useEffect } from "react";

const MeraMouseCompo = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // const meraMouse = (e) => {
  //   console.log("moouse move");
  //   setX(e.clientX);
  //   setY(e.clientY);
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", meraMouse);

  //   return () => {
  //     window.removeEventListener("mousemove", meraMouse);
  //   };
  // }, []);

  // useEffect(() => {
  //   const int = setInterval(() => {
  //     console.log("hahahh");
  //   }, 1000);

  //   return () => {
  //     clearInterval(int);
  //   };
  // }, []);

  const FetchingData = () => {};

  useEffect(() => {
    FetchingData();

    return () => {}; // clean up
  }, []);

  return (
    <div>
      x : {x}
      <br />y : {y}
    </div>
  );
};

export default MeraMouseCompo;
