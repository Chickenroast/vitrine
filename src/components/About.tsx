import React from "react";
import { motion, Transition } from "framer-motion";
import Sphere from "./Sphere";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";
import Picture from "./Picture";
import SocialIcons from "./SocialIcon";

const Home: React.FC = () => {
  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const transition: Transition = {
    type: "tween",
    duration: 2, // Adjust the duration as needed
  };
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center z-10"
      style={{ userSelect: "none" }}
    >
      <Sphere className="fixed md:w-80 md:h-80 w-[200%] flex self-end top-1 -right-20 md:right-[75%] md:mt-[10vh]" />
      <Sphere className="absolute flex self-end mt-[150%] z-40 md:mt-[40vh] md:mr-[10%] md:w-30 md:h-30" />
      <div
        className="absolute w-4 h-4 bg-pink-500 rounded-full"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      <section className="md:h-[80vh] flex justify-center md:w-[70%] md:mt-5 w-[105%] mt-[-35%] md:p-5 h-[80%] bg-white rounded-[60px] overflow-hidden z-30 shadow-2xl relative">
        {" "}
        <div className="p-5">
          <Navbar />
          {/* <MyCircle
            fill="#BE5D77"
            className="absolute md:w-1/5 md:h-1/5 md:ml-[35%] md:mt-[3%]"
          /> */}
          <div className="z-50 md:mr-[20%] md:ml-[1%] flex items-end mt-2">
            <div className="ml-auto">
              <Picture className="md:w-[150%] md:h-[150%] hover-text lg:mt-[50px]" />
            </div>
          </div>
          <p className=" lg:text-2xl hover-text text-left lg:mt-[-20%]  md:mx-5 md:mt-[20%] md:text-lg">
            React front end developer
          </p>
          <h1 className="hover-text lg:text-8xl text-4xl text-left md:mx-5 md:mt-10 md:text-7xl font-bold font-CutoffPro mt-5">
            ABOUT ME
          </h1>
          <div className="hidden lg:block">
            <CustomCursor />
          </div>
          <div className="md:mr-[20%] lg:mr-[10%]  md:mb-6">
            <h2 className="hover-text text-sm text-pink text-left md:mx-5 md:mt-10 md:text-1xl lg:text-2xl mt-5 relative z-10 text-justify mr-6">
              I am a proficient web developer with a foundation in design. My
              enthusiasm lies in continual learning, and I am adept at
              seamlessly adapting to new challenges. Possessing strong
              communication skills, I consistently approach tasks with a
              positive demeanor. I am committed to inspiring and motivating my
              team to excel in all projects.
            </h2>
          </div>
          <div className="md:mr-[35%] md:mb-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={transition}
              className="overflow-hidden md:text-1xl hover-text text-sm text-pink text-left md:mx-5 md:mt-10 lg:text-1xl mt-5 relative z-10"
              style={{ width: "100%" }}
            >
              REACT / TYPESCRIPT / JAVASCRIPT / NODEJS / HTML5 / CSS3 / SASS /
              EXPRESS JS / TAILWINDCSS / BOOTSTRAP / MONGODB / FIGMA
            </motion.div>
          </div>
          <div className="mb-5 md:mr-[10%] md:relative">
            <SocialIcons />
          </div>
        </div>
      </section>
      <Sphere className="fixed w-[20%] flex self-start mt-[160%] md:mt-[30%] md:ml-[5%]" />
    </div>
  );
};

export default Home;
