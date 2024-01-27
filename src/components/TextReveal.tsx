// TextReveal.tsx
import React, { useState, useEffect } from "react";
import "../App.css"; // Assuming your styles are in App.css

interface TextRevealProps {}

const TextReveal: React.FC<TextRevealProps> = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX } = event;
      const element = document.getElementById("textReveal");

      if (element) {
        const { left, width } = element.getBoundingClientRect();
        const distance = clientX - left;
        const percentage = (distance / width) * 100; // Calculate the percentage

        setReveal(percentage > 50);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <h1
      id="textReveal"
      className={`text-sm text-white text-left md:mx-5 md:mt-10 md:text-2xl mt-5 relative ${
        reveal ? "text-pink revealed" : "" // Add "text-pink" class here
      }`}
    >
      REACT / NODEJS / TYPESCRIPT / JAVASCRIPT / HTML5 / CSS3
    </h1>
  );
};

export default TextReveal;
