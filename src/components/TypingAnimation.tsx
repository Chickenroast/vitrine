import React, { useEffect, useState } from "react";
import "../App.css";

interface TypingAnimationProps {
  words: string[];
  colors: string[];
}

//add it to the page
// const words = [
//     "React",
//     "Node.js",
//     "TypeScript",
//     "JavaScript",
//     "HTML5",
//     "CSS3",
//     "SASS",
//     "Express.js",
//     "Tailwind CSS",
//     "Bootstrap",
//     "Figma",
//     "MongoDB",
//   ];
//   const colors = ["#fff"];

const TypingAnimation: React.FC<TypingAnimationProps> = ({ words, colors }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const interval1 = setInterval(() => {
      if (letterCount === 0 && !waiting) {
        setWaiting(true);
        setLetterCount(1);
        setTimeout(() => {
          setWaiting(false);
        }, 1000);
      } else if (letterCount === currentWord.length + 1 && !waiting) {
        setWaiting(true);
        setTimeout(() => {
          setLetterCount(0);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setWaiting(false);
        }, 1000);
      } else if (!waiting) {
        setLetterCount((prevCount) => prevCount + 1);
      }
    }, 120);

    const interval2 = setInterval(() => {
      setVisible((prevVisible) => !prevVisible);
    }, 400);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [letterCount, waiting, currentWordIndex, words]);

  return (
    <div className="console-container">
      <span id="text">{words[currentWordIndex].substring(0, letterCount)}</span>
      <div className={`console-underscore ${visible ? "" : "hidden"}`}>
        &#95;
      </div>
    </div>
  );
};

export default TypingAnimation;
