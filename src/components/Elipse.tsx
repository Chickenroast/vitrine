import React from "react";

interface MyCircleProps {
  width?: string; // Updated to use string for Tailwind CSS classes
  height?: string; // Updated to use string for Tailwind CSS classes
  fill?: string;
  className?: string;
}

const MyCircle: React.FC<MyCircleProps> = ({
  width = "w-24",
  height = "h-24",
  fill = "#BE5D77",
  className,
}) => {
  // Combine default and user-defined class names
  const combinedClassName = `w-96 h-96 ${className}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={combinedClassName}
    >
      <circle cx="48" cy="48" r="48" fill={fill} />
    </svg>
  );
};

export default MyCircle;
