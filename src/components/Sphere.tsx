import React from "react";

const Sphere: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`Sphere ${className}`}
      width="152"
      height="152"
      viewBox="0 0 152 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="76.003"
        cy="76.003"
        r="75.1002"
        transform="rotate(-48.5585 76.003 76.003)"
        fill="url(#paint0_radial_9_8)"
        stroke="none"
      />
      <defs>
        <radialGradient
          id="paint0_radial_9_8"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(78.6055 43.8394) rotate(91.3899) scale(107.295)"
        >
          <stop stopColor="#D28EA0" />
          <stop offset="1" stopColor="#F9B9CA" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Sphere;
