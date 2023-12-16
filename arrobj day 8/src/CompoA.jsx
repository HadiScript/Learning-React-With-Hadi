import React, { useState } from "react";

const CompoA = () => {
  const [name, setName] = useState("hadi");

  const changeTheName = () => setName("jadi");

  return { name, changeTheName };
};

export default CompoA;
