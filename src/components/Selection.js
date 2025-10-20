import React, { useState } from "react";
import "../styles/Child.css";
const Selection = ({ applyColor }) => {
  const [bgColor, setBgColor] = useState("");
  function handleClick() {
    applyColor((nbg) => setBgColor(nbg.background));
  }
  return (
    <div
      className="fix-box"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      Selection
    </div>
  );
};

export default Selection;
