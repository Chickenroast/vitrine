import React from "react";
import ScrollDownCircle from "./ScrollDown";
const Home: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="flex lg:p-10 h-[90%] lg:h-fit bg-white rounded-lg overflow-hidden">
        <div className="p-5">
          <div className="flex">
            <div className="text-xs ml-auto flex space-x-5 mt-5 lg:text-lg">
              <p>Projects</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
          <p className="text-left lg:mx-5 mt-[50%] lg:text-lg">
            Julia Michel T.
          </p>
          <h1 className="text-4xl text-left lg:mx-5 lg:mt-10 lg:text-7xl font-bold font-CutoffPro mt-5">
            FRONT END DEVELOPPER
          </h1>
          <div className="mt-[50%] mb-5 flex items-center justify-center">
            <div className="">
              <ScrollDownCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
