import React from "react";

// state component
const A = () => {
  const [name, updateName] = React.useState("hadi raza");
  const [lastName, updateLastName] = React.useState("rizvi");

  function myClicks() {
    alert("Change the name");
    console.log("Hi");
    updateName("Abbas ali ");
  }

  const changeLastName = (e) => {
    updateLastName(e.target.value);
  };

  return (
    <div>
      <h1>A - {name}</h1>
      {/* <button onClick={myClicks}>Change the name</button> */}
      <h5>A - {lastName}</h5>


      <input type="text" value={lastName} onChange={changeLastName} name="lastname" />
    </div>
  );
};

export default A;
