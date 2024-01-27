import React from "react";

import Sphere from "./Sphere";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";

const Home: React.FC = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center z-10 "
      style={{ userSelect: "none" }}
    >
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

      <section className="md:h-[80vh] flex justify-center md:w-[70%] md:mt-5 w-[105%] mt-[-35%] md:p-5 h-[80%] bg-white rounded-[60px] overflow-hidden z-30 shadow-2xl relative">
        {" "}
        <div className="p-5">
          <Navbar />
          {/* <MyCircle
            fill="#BE5D77"
            className="absolute md:w-1/5 md:h-1/5 md:ml-[35%] md:mt-[3%]"
          /> */}
          <p className="lg:text-2xl hover-text text-left md:mx-5 mt-[50%] md:mt-[10%] md:text-lg">
            Julia Michel T.
          </p>

          <h1 className="hover-text lg:text-8xl text-4xl text-left md:mx-5 md:mt-10 md:text-7xl font-bold font-CutoffPro mt-5">
            FRONT END DEVELOPER
          </h1>
          <div className="md:mr-[20%] lg:mr-[10%]  md:mb-6">
            <h2 className="hover-text text-sm text-pink text-left md:mx-5 md:mt-10 md:text-1xl lg:text-2xl mt-5 relative z-10 text-justify mr-6">
              Based in Belgium
            </h2>
          </div>
          <div className="hidden lg:block">
            <CustomCursor />
          </div>

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
