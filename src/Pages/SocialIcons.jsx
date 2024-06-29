import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Github, Twitter, LinkedIn } from "../Pages/AllSvgs";

const SocialIcons = ({ click }) => {
  // Use media query to determine if the screen width is at least 768px (md breakpoint)
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  // Determine the icon color based on screen size and click state
  const iconColor = isLargeScreen && click ? "#fff" : "#000";

  return (
    <div className="flex flex-col items-start">
      <div className="my-4 pl-5 lg:pl-9 icons_hover">
        <a href="https://github.com/Narendra-jinka" target="_blank" rel="noopener noreferrer">
          <Github width={25} height={25} color={iconColor} />
        </a>
      </div>
      <div className="my-4 pl-5 lg:pl-9 icons_hover">
        <a href="https://www.linkedin.com/in/narendra-jinka-a06549240/" target="_blank" rel="noopener noreferrer">
          <LinkedIn width={25} height={25} color={iconColor} />
        </a>
      </div>
      <div className="my-4 pl-5 lg:pl-9 icons_hover">
        <a href="https://x.com/NARENDR22198702" target="_blank" rel="noopener noreferrer">
          <Twitter width={25} height={25} color={iconColor} />
        </a>
      </div>
      <div className="pl-[30px] lg:pl-[45px] ">
        <div className={`w-[2px] h-32 ${isLargeScreen && click ? 'bg-white' : 'bg-black'}`}></div>
      </div>
    </div>
  );
};

export default SocialIcons;
