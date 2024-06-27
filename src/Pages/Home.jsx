import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PowerBtn, YinYang } from "./AllSvgs";
import SocialIcons from "./SocialIcons";
import Intro from "./Intro";

const Home = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  function Logo() {
    return (
      <h1
        className={`pacifico-font text-3xl z-10 pl-[30px] ${
          click ? "text-white" : "text-black"
        } logo_text `}
      >
        _NarendrA_
      </h1>
    );
  }

  const contactMe = () => navigate("/contact");
  const checkProject = () => navigate("/projects");
  const checkAbout = () => navigate("/about");

  return (
    <div className="h-screen bg-[#fcf6f4]">
      <div className="pt-[30px] flex justify-between items-center">
        <Logo />
        <NavLink
          to="/"
          className={`h-[50px] z-10 w-[50px] rounded-full p-2 power_hover hover:shadow-custom ${
            click ? "bg-[#fcf6f4]" : ""
          } `}
        >
          <PowerBtn />
        </NavLink>
        <div className="overflow-hidden z-10">
          <button
            onClick={contactMe}
            className="h-[40px] w-[200px]"
          >
            <h1 className={`pacifico-font text-xl text_hover ${click ? 'text-white' : 'text-black'} lg:text-black`}>
              Contact Me ..
            </h1>
          </button>
        </div>
      </div>

      <div
        className={`transition_main z-1 absolute bottom-0 right-1/2 top-0 bg-black ${
          click ? "h-[100%] w-[50%] black_screen" : "h-0 w-0"
        }`}
      ></div>

      <div
        className={`absolute ${
          click ? "top-[80%] left-[90%] yinYang_pic_clicked" : "top-1/2 left-1/2"
        } transform -translate-x-1/2 -translate-y-1/2 flex flex-col bg-transparent overflow-hidden cursor-pointer transition-all duration-1000 ease yinYang_pic`}
      >
        <button onClick={() => handleClick()} className="animate-spin">
          <YinYang hight={click ? 100 : 175} width={click ? 100 : 175} />
        </button>
        <h3 className={`flex justify-center pt-2 ${click ? "hidden" : ""}`}>
          Click here..
        </h3>
      </div>

      <div className={`overflow-hidden absolute right-0 ${click ? 'top-[30%] ' : 'top-[45%]'} md:top-[50%]`}>
        <button onClick={checkProject} className="h-[100px] w-[100px]">
          <h1 className={`pages-font text-2xl text_hover rotate-[90deg] ${click ? 'text-white' : 'text-black'} lg:text-black`}>
            Projects.
          </h1>
        </button>
      </div>

      <div
        className={`overflow-hidden absolute bottom-0 ${
          click ? "left-[38%]" : "left-[45%]"
        }`}
      >
        <button onClick={checkAbout} className="h-[50px] w-[100px]">
          <h1 className={`pages-font text-2xl text_hover ${click ? "text-black md:text-white" : "text-black md:text-black"}`}>
            About.
          </h1>
        </button>
      </div>

      <div className="fixed z-10 bottom-0 left-0 pt-[25px] text-black md:text-white">
        <SocialIcons click={click} />
      </div>

      {click ? <Intro click={click} /> : null}
    </div>
  );
};

export default Home;
