import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { PowerBtn } from "./AllSvgs";
import SocialIcons from "./SocialIcons";
import Particlejs from "./Particaljs.jsx";
import Icons from "./Icons.jsx";

const About = () => {
  const navigate = useNavigate();

  function Logo() {
    return (
      <h1 className="pacifico-font text-white text-2xl lg:text-3xl  z-20 pl-[20px] lg:pl-[30px]">
        _NarendrA_
      </h1>
    );
  }

  const Header = () => {
    return (
      <div className="pt-[30px] flex justify-between z-20">
        <Logo />
        <NavLink
          to="/"
          className="h-[40px] z-20 w-[40px] rounded-full ml-4 p-2 power_hover hover:shadow-custom bg-white"
        >
          <PowerBtn />
        </NavLink>
        <div className="overflow-hidden z-20">
          <button onClick={contactMe} className="h-[40px] w-[200px]">
            <h1 className="pacifico-font text-xl  text-white text_hover">
              Contact Me ..
            </h1>
          </button>
        </div>
      </div>
    );
  };

  

  const AboutMe = () => {
    return (
      <div className="absolute flex justify-center items-center w-full h-auto mt-[50px] z-10">
        <div className="bg-white ml-2  mr-2 bg-opacity-5 backdrop-blur-lg border-2 border-white w-[490px] lg:w-5/6  rounded-xl flex flex-col md:flex-row justify-center items-center p-4">
          <div className="w-full md:w-1/2 flex flex-col justify-center text-white mb-4 md:mb-0 md:pr-4 ">
            <h2 className="text-2xl font-bold mb-4 about_titles flex justify-center md:justify-center">
              ABOUT ME !.
            </h2>
            <p className="about_text">
              I am a dedicated
              <span className="text-[#e78447] font-bold text-lg">
                {" "}
                Full-Stack Developer{" "}
              </span>{" "}
              with proficiency in the
              <span className="text-[#e78447] font-bold text-lg"> MERN</span>{" "}
              stack, seamlessly blending{" "}
              <span className="text-[#e78447] font-bold text-lg"> Front-end</span>{" "}
              and{" "}
              <span className="text-[#e78447] font-bold text-lg"> Back-end</span>{" "}
              skills to create engaging and robust web applications. Explore my
              Projects section to see some of my latest work.
            </p>
            <br />
            <p className="about_text">
              I am open to job opportunities where I can contribute, learn, and
              grow. If you have a suitable position that aligns with my skills
              and experience, please feel free to reach out. You can connect
              with me through my social links.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center text-white">
            <h2 className="text-2xl font-bold mb-4 about_titles flex justify-center md:justify-center">
              MY SKILLS .
            </h2>
            <div className="">
              <Icons />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const contactMe = () => navigate("/contact");

  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particlejs />
      </div>
      <Header />
      <AboutMe />
      
    </div>
  );
};

export default About;
