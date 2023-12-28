import React from "react";
import ScrollDownCircle from "./ScrollDown";
const Home: React.FC = () => {
  return (
    <div className="h-screen flex items-center">
      <div className="flex p-10 h-fit bg-white rounded-lg overflow-hidden">
        <div className="p-5">
          <div className="flex">
            <p className="mx-5 mt-5 text-lg">Julia Michel T.</p>
            <div className="ml-auto flex space-x-5 mt-5 text-lg">
              <p>Projects</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
          <h1 className="text-left mx-5 mt-10 text-7xl font-bold font-CutoffPro">
            FRONT END DEVELOPPER
          </h1>
          <div className="mt-10 mb-5 flex items-center justify-center">
            <div className="align-center">
              <ScrollDownCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
