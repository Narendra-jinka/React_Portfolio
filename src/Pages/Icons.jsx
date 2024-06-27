import React from "react";

import java from "../assets/Icons/java.svg";
import js from "../assets/Icons/javascript.svg";
import html from "../assets/Icons/html5.svg";
import css from "../assets/Icons/css3.svg";
import tw from "../assets/Icons/tailwind.svg";
import node from "../assets/Icons/node.svg";
import ex from "../assets/Icons/express.svg";
import github from "../assets/Icons/github.svg";
import py from "../assets/Icons/python.svg";
import git from "../assets/Icons/git.svg";
import react from "../assets/Icons/react.svg";
import mdb from "../assets/Icons/mongodb.svg";
import sql from "../assets/Icons/mysql.svg";

const Icons = () => {
  return (
    <div className="space-y-4 text-white">
      <div className="flex justify-center space-x-10">
        <img src={html} alt="HTML5" className="w-8 h-8" />
        <img src={css} alt="CSS3" className="w-8 h-8" />
        <img src={js} alt="JavaScript" className="w-8 h-8" />
        <img src={react} alt="React" className="w-8 h-8" />
        <img src={tw} alt="Tailwind CSS" className="w-8 h-8" />
      </div>
      <div className="flex justify-center space-x-10">
        <img src={node} alt="Node.js" className="w-8 h-8" />
        <img src={ex} alt="Express" className="w-8 h-8" />
        <img src={mdb} alt="MongoDB" className="w-8 h-8" />
        <img src={sql} alt="SQL" className="w-10 h-10" />
      </div>
      <div className="flex justify-center space-x-10">
        <img src={java} alt="Java" className="w-8 h-8" />
        <img src={py} alt="Python" className="w-8 h-8" />
      </div>

      <div className="flex justify-center space-x-10">
        <img src={github} alt="GitHub" className="w-8 h-8" />
        <img src={git} alt="Git" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Icons;
