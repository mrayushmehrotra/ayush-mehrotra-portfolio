import React from "react";
import "./mariocss.css";

export const MarioAnimation = () => {
  return (
    <div>
      <div className="brick one"></div>
      <div className="tooltip-mario-container">
        <div className="box"></div>
        <div className="mush"></div>
      </div>
      <div className="brick two"></div>
    </div>
  );
};
