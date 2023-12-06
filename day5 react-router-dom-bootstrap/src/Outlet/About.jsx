import React from "react";
import MyBtn from "./components/MyBtn";

const About = () => {
  return (
    <div>
      About
      <MyBtn clickHander={() => alert("helloo")}>Read more</MyBtn>
    </div>
  );
};

export default About;
