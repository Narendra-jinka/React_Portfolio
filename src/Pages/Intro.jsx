import React from "react";
import { motion } from "framer-motion";
import Me from "../assets/imgs/pic_me.png";
//import Me from '../assets/imgs/profile-img.png';
import ReactRotatingText from "react-rotating-text";

const Intro = () => {
  const messages = ["Full-Stack Developer", "MERN Stack Specialist", "Java Developer"];
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[55vh] flex z-1 intro_style intro_style_sm"
    >
      <div className="w-1/2 relative flex">
        <div className="flex flex-col  text-center  text-white pl-3 lg:p-5 cursor-pointer">
          <h1 className=" opacity-65 hero_text_sm"
           style={{
              fontFamily: "Cinzel",
              fontSize: "2rem",
              letterSpacing: 4, 
            }} >Hey,</h1>
          <h2 className="font-semibold lg:p-8"
            style={{
              fontFamily: "Cinzel",
              fontSize: "2rem",
              letterSpacing: 4, 
            }}
          >
            <span className=" opacity-50">I'm</span> NarendrA,
          </h2>
          <h5
            className=" md:text-[1.5rem] text-[1.1rem] font-light text-white/80 "
            style={{
              fontFamily: "Cinzel",
              
            }}
          >
            <ReactRotatingText items={messages}
            speed={1000}
            pause={1500}
            
            deleteSpeed={800}
             />
          </h5>
        </div>
      </div>
      <div className="w-1/2 relative flex ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-auto"
        >
          <img className="w-full md:h-auto h-auto" src={Me} alt="Profile Pic" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
