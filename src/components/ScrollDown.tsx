import React from "react";

const ScrollDown: React.FC = () => {
  const letters = ["S", "C", "R", "O", "L", "L", "D", "O", "W", "N"];

  const calculateLetterStyle = (index: number): React.CSSProperties => {
    const rotationAngle = index * (360 / letters.length);
    const positionX = 25 + Math.cos((rotationAngle * Math.PI) / 180) * 25;
    const positionY = 25 + Math.sin((rotationAngle * Math.PI) / 180) * 25;

    return {
      width: "30px", // Adjust the width based on your design
      height: "30px", // Adjust the height based on your design
      left: `${positionX}px`,
      top: `${positionY}px`,
      position: "absolute",
      transform: `rotate(${rotationAngle}deg)`,
      transformOrigin: "0 0",
      textAlign: "center",
      color: "black",
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: 400,
      wordWrap: "break-word",
      animation: "fadeIn 1.2s ease-out forwards",
      animationDelay: `${index * 1.2}s`, // Adjust the delay based on your preference
    } as React.CSSProperties;
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        transform: "rotate(-2.99deg)",
        transformOrigin: "0 0",
      }}
    >
      {letters.map((letter, index) => (
        <div key={index} style={calculateLetterStyle(index)}>
          {letter}
        </div>
      ))}
    </div>
  );
};

export default ScrollDown;
