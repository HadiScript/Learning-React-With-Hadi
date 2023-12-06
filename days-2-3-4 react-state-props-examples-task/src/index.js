// simple compon
// function myFirstComponent() {
//   let name = "hadi raza";

//   // returning JSX
//   return (
//     <div>
//       <h1>From {name}</h1>
//       <h1>From hadi</h1>
//     </div>
//   );
// }

// // same as above
// const myFirstComponent = () => {
//   let name = "hadi raza";

//   return (
//     <div>
//       <h1>From {name}</h1>
//       <h1>From hadi</h1>
//     </div>
//   );
// };

// props
// state?
// state or stateless component
// prop drilling? solution
// component distribute

import React from "react";
import ReactDOM from "react-dom/client";
// import ShowMore from "./day3/ShowMore";
// import App from "./day3/App";
// import Task from "./firstTask/Task";

// import FirstCompo from "./props/FirstCompo";

// import A from "./state/A";
// import App from "./day3/day4/App";
import App from "./day5/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FirstCompo />); //day1
// root.render(<A />); //day1
// root.render(<Task />); // day2
// root.render(<App />); // day2
// root.render(<ShowMore />); //day3
// root.render(<App />); //day4 -> day 3 task
root.render(<App />); //day5
