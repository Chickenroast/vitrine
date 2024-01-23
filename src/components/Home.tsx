import React, { useState, useEffect } from "react";
import ScrollDownCircle from "./ScrollDown";
import Sphere from "./Sphere";
import CustomCursor from "./CustomCursor";

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center z-10">
      <Sphere className="fixed md:w-80 md:h-80 w-[200%] flex self-end top-1 -right-20 md:right-[75%] md:mt-[10vh]" />
      <Sphere className="absolute flex self-end mt-[150%] z-40 md:mt-[40vh] md:mr-[10%]" />
      <div
        className="absolute w-4 h-4 bg-pink-500 rounded-full"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      <section className="flex justify-center md:w-[70%] md:mt-5 w-[105%] h-[80%] mt-[-35%] md:p-5 h-[80%] md:h-fit bg-white rounded-[60px] overflow-hidden z-30 shadow-2xl relative">
        {" "}
        <div className="p-5">
          <div className="hover-text text-xs ml-auto px-5 flex space-x-5 mt-5 md:text-lg md:text-right self-end justify-end">
            <p className="hover:text-bold">Projects</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          {/* <MyCircle
            fill="#BE5D77"
            className="absolute md:w-1/5 md:h-1/5 md:ml-[35%] md:mt-[3%]"
          /> */}
          <p className="hover-text text-left lg:mt-3 md:mx-5 mt-[50%] md:mt-[20%] md:text-lg">
            Julia Michel T.
          </p>

          <h1 className="hover-text lg:text-8xl text-4xl text-left md:mx-5 md:mt-10 md:text-7xl font-bold font-CutoffPro mt-5">
            FRONT END DEVELOPPER
          </h1>
          <CustomCursor />

          <h1 className="hover-text text-sm text-pink text-left md:mx-5 md:mt-10 md:text-2xl mt-5 relative z-10">
            REACT / NODEJS / TYPESCRIPT / JAVASCRIPT / HTML5 / CSS3 / SASS /
            EXPRESS JS
          </h1>
          {/* <div className="md:mt-[20%] mt-[50%] mb-5 md:mb-[10%] flex items-center justify-center">
            <div>
              <ScrollDownCircle />
            </div>
          </div> */}
        </div>
      </section>
      <Sphere className="fixed w-[20%] flex self-start mt-[160%] md:mt-[30%] md:ml-[5%]" />
    </div>
  );
};

export default Home;
