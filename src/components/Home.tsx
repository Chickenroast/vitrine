import React from "react";
import ScrollDownCircle from "./ScrollDown";
import Sphere from "./Sphere";

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Sphere className="fixed w-[200%] flex self-end top-1 -right-20" />
      <Sphere className="absolute flex self-end mt-[150%] z-40 " />
      <section className="flex w-[105%] h-[80%] mt-[-35%] lg:p-10 h-[80%] lg:h-fit bg-white rounded-[60px] overflow-hidden z-30 shadow-2xl">
        <div className="p-5">
          <div className="flex">
            <div className="text-xs ml-auto px-5 flex space-x-5 mt-5 lg:text-lg">
              <p className="hover:text-bold">Projects</p>
              <p>About</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="bg-pink rounded-full"></div>
          <p className="text-left lg:mx-5 mt-[50%] lg:text-lg">
            Julia Michel T.
          </p>
          <h1 className="text-4xl text-left lg:mx-5 lg:mt-10 lg:text-7xl font-bold font-CutoffPro mt-5">
            FRONT END DEVELOPPER
          </h1>
          <div className="mt-[50%] mb-5 flex items-center justify-center">
            <div>
              <ScrollDownCircle />
            </div>
          </div>
        </div>
      </section>
      <Sphere className="fixed w-[20%] flex self-start mt-[160%]" />
    </div>
  );
};

export default Home;
