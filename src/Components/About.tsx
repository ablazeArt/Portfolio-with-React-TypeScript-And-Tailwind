import React from "react";
import { AiFillGithub } from "react-icons/ai";
import deved from "../img/deved.jpg";
import Typed from "react-typed";

interface AboutProps {
  changeOnSection: (id: string) => void;
  changeOutSection: (id: string) => void;
}

const About = ({changeOnSection, changeOutSection}: AboutProps) => {
  return (
    <section id="about" data-aos="zoom-in-down" data-aos-duration="2000">
      <div className="text-center p-10 py-10 mt-14 md:mt-16" onMouseOver={() => changeOnSection('about')} onMouseOut={() => changeOutSection('about')} onTouchMove={() => changeOnSection('about')}>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-0 md:h-96 md:w-96 sm:h-80 sm:w-80">
            <img src={deved} style={{ objectFit: "cover", width: "100%", height: "100%" }} />
          </div>
          <div className="basis-1/3 flex-1">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Fuart Madnurak</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">WEB D<Typed className="text-2xl py-2 dark:text-white md:text-3xl" strings={["EVELOPER"]} typeSpeed={120} backSpeed={140} loop /></h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-base text-center">Two years ago, I discovered my passion for creating websites and have since self-taught various technologies related to website development, such as React.js, Node.js, and MongoDB, including completing several website projects. As a result, I have decided to pursue a career in this field.</p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/ablazeArt">
                <div className="flex flex-col items-center hover:text-cyan-600 dark:hover:text-cyan-600">
                  <AiFillGithub />
                  <h1 className="text-base">GitHub</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
