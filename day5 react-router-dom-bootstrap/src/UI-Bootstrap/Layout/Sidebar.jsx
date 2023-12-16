import React from "react";
import { myStyle } from "../StyleConfig";
import { BarChart } from "react-feather";

const color = "#172c73";

const Sidebar = ({ title }) => {
  return (
    <div className="nav-links ">
      {title && (
        <span className={`${myStyle.FlexStart} nav-link mt-4`} style={{ fontWeight: "bold", fontSize: "28px", color: color }}>
          Hadi Raza
        </span>
      )}
      <span className={`${myStyle.FlexStart} nav-link `} style={{ marginTop: title ? "30px" : "0px" }}>
        <div className={`${myStyle.FlexCenter}`}>
          <BarChart color={color} size={20} /> Notes
        </div>
      </span>
      <span className={`${myStyle.FlexStart} nav-link my-2 `}>
        <div className={`${myStyle.FlexCenter}`}>
          <BarChart color={color} size={20} /> Settings
        </div>
      </span>
      <span className={`${myStyle.FlexStart} nav-link my-2 `}>
        <div className={`${myStyle.FlexCenter}`}>
          <BarChart color={color} size={20} /> Profile
        </div>
      </span>
    </div>
  );
};

export default Sidebar;
