import { useState } from "react";
import { Navbar, Button } from "flowbite-react";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface NavProps {
  onSection: string;
  onChangeDarkMode: () => void;
}

const Nav = ({ onSection, onChangeDarkMode }: NavProps) => {
  return (
    <div>
      <Navbar fluid={true} className="bg-slate-50 border-b-1 border-gray-400 px-2 sm:px-4 py-5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <Navbar.Brand href="/#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ABLAZE</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <h1 onClick={onChangeDarkMode} className="flex cursor-pointer hover:text-cyan-600 dark:hover:text-cyan-600 dark:text-white">
            <h1 className="mr-2 mt-2 md:mt-0">Theme</h1>
            <BsFillMoonStarsFill className="text-2xl mt-2 mr-2 md:m-0" />
          </h1>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/#" active={onSection == 'about' ? true : false} className={onSection == 'about' ? 'text-lg' : ''}>
            About me
          </Navbar.Link>
          <Navbar.Link href="/#services" active={onSection == 'services' ? true : false} className={onSection == 'services' ? 'text-lg' : ''}>Skills & Services</Navbar.Link>
          <Navbar.Link href="/#portfolio" active={onSection == 'portfolio' ? true : false} className={onSection == 'portfolio' ? 'text-lg' : ''}>Portfolio</Navbar.Link>
          <Navbar.Link href="/#certificate" active={onSection == 'certificate' ? true : false} className={onSection == 'certificate' ? 'text-lg' : ''}>Certificate</Navbar.Link>
          <Navbar.Link href="/#education" active={onSection == 'education' ? true : false} className={onSection == 'education' ? 'text-lg' : ''}>Education</Navbar.Link>
          <Navbar.Link href="/#contact" active={onSection == 'contact' ? true : false} className={onSection == 'contact' ? 'text-lg' : ''}>Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
