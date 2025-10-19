import React from "react";
import "../styles/Child.css";
const Selection = ({ applyColor, color, selectedId }) => {
  function handleClick() {
    applyColor(selectedId)
  }
  return (
    <div
      className="fix-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      Selection
    </div>
  );
};

export default Selection;
