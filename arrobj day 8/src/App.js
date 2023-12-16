// import React, { useState } from "react";

// const initValues = {
//   name: "hadi raza",
//   age: 24,
// };

// const App = () => {
//   const [formData, setFormData] = useState(initValues);

//   const chaneValues = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   console.log(formData);

//   return (
//     <>
//       <input name="name" value={formData.name} onChange={chaneValues} />
//       <input name="age" value={formData.age} onChange={chaneValues} />
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import CompoA from "./CompoA";
import { _useMyUsers } from "./actions/_users";

// useCallBack // func cache
// useMemo // cal cache
// useEffect // re rendering
// memo // compo cache
// useContext // globle state -> Redux, zustand, recoil, etc....
// reducer // [], single value
// useReducer // state managements
// switch

// forEach

// task2 : lodash explore and use - many function

const App = () => {
  const { name, changeTheName } = CompoA();

  const [first, setFirst] = useState("");

  const submitHandler = () => {
    let updateTags; // logic
    console.log(updateTags); // ["hadi", "raza", "ali", so on....]
  };

  return (
    <div>
      am here
      <input placeholder="e.g: hadi,raza,ali,abbas" value={first} onChange={(e) => setFirst(e.target.name)} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default App;
