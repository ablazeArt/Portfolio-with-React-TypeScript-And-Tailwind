import { useState } from "react";
import "../styles/globals.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Navbar, Button } from "flowbite-react";
import Services from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Education from "./Components/Education";
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [onSection, setOnsection ] = useState('');
  const changeOnSection = (sectionId: string) => {
    setOnsection(sectionId);
    console.log(sectionId);
  }
  const changeOutSection = () => {
    setOnsection('');
  }

  return (
    <div className="App">
      <div className={darkMode ? "" : "dark"}>
        <main className="bg-slate-100 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
          <Nav onSection={onSection} onChangeDarkMode={changeDarkMode} />
          <About changeOnSection = {changeOnSection} changeOutSection = {changeOutSection}/>
          <Services changeOnSection = {changeOnSection} changeOutSection = {changeOutSection}/>
          <Portfolio changeOnSection = {changeOnSection} changeOutSection = {changeOutSection}/>
          <Certificate changeOnSection = {changeOnSection} changeOutSection = {changeOutSection}/>
          <Education changeOnSection = {changeOnSection} changeOutSection = {changeOutSection}/>
          <Contact changeOnSection = {changeOnSection} changeOutSection = {changeOutSection}/>
        </main>
      </div>
    </div>
  );
}

export default App;
