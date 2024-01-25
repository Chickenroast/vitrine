import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [isTextHovered, setIsTextHovered] = useState(false);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });

    // Example: check for hover on elements with class "hover-text"
    const elements = document.getElementsByClassName("hover-text");

    let isHovered = false;

    for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        isHovered = true;
        break; // Exit the loop if any element is hovered
      }
    }

    setIsTextHovered(isHovered);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const cursorClasses = `cursor opacity-100 ${
    clicked ? "cursor--clicked" : ""
  }`;

  const circularMaskSize = isTextHovered ? 100 : 50;

  return (
    <div>
      <motion.div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${circularMaskSize}px`,
          height: `${circularMaskSize}px`,
          borderRadius: "50%",
          backgroundColor: isTextHovered ? "#ffffff" : "#BE5D77",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 1,
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </div>
  );
};

export default CustomCursor;
