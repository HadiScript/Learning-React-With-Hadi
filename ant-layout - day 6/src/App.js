import React, { useState } from "react";
import ProfileLayout from "./Layout/ProfileLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// first of seperate all the component of ProfileLayout
// make both sidebar sticky and overflow y = auto
// you can see index.css, i have past all css for you, so you can now add classes

const App = () => {
  return <ProfileLayout />;
};

export default App;
