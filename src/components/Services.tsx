import React, { useState } from "react";
import Sphere from "./Sphere";
import CustomCursor from "./CustomCursor";
import Navbar from "./Navbar";

import { Collapse, Button } from "@material-tailwind/react";

const Services: React.FC = () => {
  const [openSections, setOpenSections] = useState([false, false, false]);

  const toggleOpen = (index: number) => {
    setOpenSections((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center z-10 "
      style={{ userSelect: "none" }}
    >
      <Sphere className="fixed md:w-80 md:h-80 w-[200%] flex self-end top-1 -right-20 md:right-[75%] md:mt-[10vh]" />
      <Sphere className="absolute flex self-end mt-[150%] z-40 md:mt-[40vh] md:mr-[5%]" />
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
          <div className="p-5 lg:flex lg:flex-row lg:mt-[10vh]">
            <div className="lg:w-[50%]">
              <p className=" lg:text-2xl hover-text text-left lg:mt-3 md:mx-5 mt-[50%] md:mt-[20%] md:text-lg">
                Services
              </p>

              <h1 className="hover-text lg:text-8xl text-4xl text-left md:mx-5 md:mt-10 md:text-7xl font-bold font-CutoffPro mt-5">
                WHAT I DO
              </h1>
              <div className="md:mr-[20%]  md:mb-6">
                <h2 className="hover-text text-sm text-pink text-left md:mx-5 md:mt-10 md:text-1xl lg:text-2xl lg:mt-2 mt-5 relative z-10 text-left mr-6">
                  Discover my services, for web development to design.
                </h2>
              </div>
            </div>

            <div className="lg:mt-[8%]">
              <div className="md:mx-5 flex flex-row justify-between">
                <h2 className="lg:mb-5 hover-text mt-3 font-CutoffPro text-2xl lg:text-6xl font-bold">
                  Web Development
                </h2>
                <Button
                  placeholder={""}
                  onClick={() => toggleOpen(0)}
                  className="lg:mt-5 bg-pink p-1 rounded-full text-1xl flex items-center justify-center w-8 h-8"
                >
                  {openSections[0] ? "-" : "+"}
                </Button>
              </div>
              <Collapse open={openSections[0]}>
                <p className="lg:mb-5 lg:mt-2 md:mx-5 lg:text-2xl text-pink">
                  Create sites and web applications using React TypeScript, Wix,
                  WordPress, Odoo.
                </p>
              </Collapse>
              <div className="md:mx-5 flex flex-row justify-between">
                <h2 className="lg:mb-5 hover-text mt-3 font-CutoffPro text-2xl lg:text-6xl font-bold">
                  SEO
                </h2>
                <Button
                  placeholder={""}
                  onClick={() => toggleOpen(1)}
                  className="lg:mt-5 bg-pink p-1 rounded-full text-1xl flex items-center justify-center w-8 h-8"
                >
                  {openSections[1] ? "-" : "+"}
                </Button>
              </div>
              <Collapse open={openSections[1]}>
                <p className="lg:mb-5 lg:mt-2 md:mx-5 lg:text-2xl text-pink">
                  Optimise sites for Google search with images tags, keywords
                  Planner, url keywords.
                </p>
              </Collapse>
              <div className="md:mx-5 flex flex-row justify-between">
                <h2 className="hover-text mt-3 font-CutoffPro text-2xl lg:text-6xl font-bold">
                  Design
                </h2>
                <Button
                  placeholder={""}
                  onClick={() => toggleOpen(2)}
                  className="lg:mt-5 bg-pink p-1 rounded-full text-1xl flex items-center justify-center w-8 h-8"
                >
                  {openSections[2] ? "-" : "+"}
                </Button>
              </div>
              <Collapse open={openSections[2]}>
                <p className="lg:mb-5 lg:mt-2 md:mx-5 lg:text-2xl text-pink">
                  Create Designs with Adobe Photoshop, Illustrator, InDesign,
                  Canva.
                </p>
              </Collapse>
            </div>
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

export default Services;
