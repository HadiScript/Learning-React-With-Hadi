// import React, { useState } from "react";
// // munib
// // zeeshan
// // shahriyar
// // awais
// // nusrat
// // rubab

// const Task = () => {
//   // take 4 useState
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [gender, setGender] = useState(false);
//   // 0 (false) male, 1 (true) female

//   // check -> click -> true
//   // check -> click -> false

//   const submitHandler = () => {
//     if (password !== confirmPassword) {
//       alert("Your password are not match");
//     } else {
//       console.log(name, email, password, gender);
//     }
//   };

//   return (
//     <div>
//       <h1>Form</h1>
//       <br />
//       <input value={name} onChange={(e) => setName(e.target.value)} placeholder="your name" />
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" type="email" />
//       <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Passowrd" type="password" />
//       <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password " type="password" />
//       <input type="checkbox" checked={gender} onChange={(e) => setGender(!gender)} />
//       checked if your female: {gender === true && "Female"}
//       <button onClick={submitHandler}>Submit</button>
//     </div>
//   );
// };

// export default Task;

import React, { useState } from "react";

const Task = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const Func = () => {
    if (showPassword === true) {
      return "text";
    } else {
      return "password";
    }
  };

  return (
    <div>
      <input type={Func()} value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => setShowPassword(!showPassword)}>show</button>
    </div>
  );
};

export default Task;
