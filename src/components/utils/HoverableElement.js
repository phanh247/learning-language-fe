import React, { useState } from "react";
import { Link } from "react-router-dom";

function HoverableElement({ content }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? "lightgray" : "white",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      {isHovered && (
        <Link to="/learn">Lear Now</Link>
      )}
    </div>
  );
}

export default HoverableElement;
