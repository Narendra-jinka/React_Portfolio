import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Theams";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { PowerBtn, YinYang, Github } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 300vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.div)`
  position: fixed;
  top: 10rem;
  left: calc(10rem + 15vw);
  height: 60vh;
  display: flex;
  color: white;
`;

const Card = styled(motion.div)`
  width: 22rem;
  height: 55vh;
  background-color: white;
  color: black;
  padding: 1rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
  transition: all 0.2s ease;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid white;
  }
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.1rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1rem + 0.5vw);

  ${Card}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled.a`
  text-decoration: none;
  padding-right: 20px;
  ${Card}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 0.5rem;
  width: 60px;
  height: 60px;
  z-index: 1;
`;

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Card}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;
const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const navigate = useNavigate();
  const contactMe = () => navigate("/contact");

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  const Logo = () => {
    return (
      <>
        <h1 className="pacifico-font text-white text-3xl z-20 pl-[30px]">
          _NarendrA_
        </h1>
      </>
    );
  };

  const Headers = () => {
    return (
      <>
        <div className="block fixed top-0 w-full z-1 h-20">
          <div className="pt-[30px] flex justify-between z-20">
            <Logo />
            <NavLink
              to="/"
              className="h-[40px] z-20 w-[40px] rounded-full p-2 power_hover hover:shadow-custom bg-white"
            >
              <PowerBtn />
            </NavLink>
            <div className="overflow-hidden z-20">
              <button onClick={contactMe} className="h-[40px] w-[200px]">
                <h1 className="pacifico-font text-xl text-white text_hover">
                  Contact Me ..{" "}
                </h1>
              </button>
            </div>
          </div>
        </div>
        <div className="block fixed top-[12%] left-[50%] w-full z-1 h-20">
          <h1 className="works_logo">WORKS</h1>
        </div>
      </>
    );
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Headers />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          <Card variants={Item}>
            <h1 className="text-[1.4rem]  font-[600] font-[Signika Negative]">
              {" "}
              Personal Portfolio
            </h1>
            <p>
              A personal portfolio that highlights my projects, skills, and
              achievements through a sleek and modern design. Explore my work
              and get to know my professional journey.
            </p>
            <Tags>
              <Tag className=" font-semibold">#React</Tag>
              <Tag className=" font-semibold">#Tailwind CSS</Tag>
              <Tag className=" font-semibold">#Framer-motion</Tag>
            </Tags>

            <div className="flex justify-between">
              <Link href="http://">Visit</Link>
              <Git href="http://" target="_blank">
                <Github
                  width={30}
                  height={30}
                  color={`${Card}:hover ? "#fff": "#000" `}
                />
              </Git>
            </div>
          </Card>
          <Card variants={Item}>
            <h1 className="text-[1.4rem]  font-[600] font-[Signika Negative]">
              {" "}
              MEDPLUS
            </h1>
            <p>
              A comprehensive doctor appointment system designed to streamline
              scheduling, manage patient records, and enhance communication
              between patients and healthcare providers.A seamless healthcare
              experience..
            </p>
            <Tags>
              <Tag className=" font-semibold">#MERN Stack</Tag>
              <Tag className=" font-semibold">#Tailwind</Tag>
            </Tags>

            <div className="flex justify-between">
              <Link href="https://docmeetease.netlify.app/">Visit</Link>
              <Git href="https://github.com/Narendra-jinka/Project-thesis.git" target="_blank">
                <Github
                  width={30}
                  height={30}
                  color={`${Card}:hover ? "#fff": "#000" `}
                />
              </Git>
            </div>
          </Card>
          <Card variants={Item}>
            <h1 className="text-[1.4rem]  font-[600] font-[Signika Negative]">
              {" "}
              E-Cart
            </h1>
            <p>
              A user-friendly e-commerce platform offering a wide range of
              products, secure transactions, and fast delivery. Shop
              conveniently from the comfort of your home.
            </p>
            <Tags>
              <Tag className=" font-semibold">#MERN Stack</Tag>
              <Tag className=" font-semibold">#Tailwind</Tag>
            </Tags>

            <div className="flex justify-between">
              <Link href="https://e-buys.netlify.app/" target='_blank'>Visit</Link>
              <Git href="https://github.com/Manohar2503/e-com.git" target="_blank">
                <Github
                  width={30}
                  height={30}
                  color={`${Card}:hover ? "#fff": "#000" `}
                />
              </Git>
            </div>
          </Card>
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={60} height={60} color={"#fff"} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
