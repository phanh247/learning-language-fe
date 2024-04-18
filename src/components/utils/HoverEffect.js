import React, { useState } from "react";

function HoverEffect({
  defaultColor,
  hoverColor,
  defaultBgColor,
  hoverBgColor,
  defaultBoxShadow,
  hoverBoxShadow,
  defaultHeight,
  hoverHeight,
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColor = isHovered ? hoverColor : defaultColor;
  const bgColor = isHovered ? hoverBgColor : defaultBgColor;
  const boxShadow = isHovered ? hoverBoxShadow : defaultBoxShadow;
  const heightHv = isHovered ? hoverHeight : defaultHeight;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        color: textColor,
        backgroundColor: bgColor,
        boxShadow: boxShadow,
        height:heightHv,
      }}
    >
      {children}
    </div>
  );
}

export default HoverEffect;
