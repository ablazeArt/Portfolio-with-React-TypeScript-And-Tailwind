import web1 from "../img/smart-control.png";
import web2 from "../img/nuraknava.png";
import web3 from "../img/prayer-todo.png";
import web4 from "../img/modern-farming.png";

interface PortfolioProps {
  changeOnSection: (id: string) => void;
  changeOutSection: (id: string) => void;
}

const Portfolio = ({changeOnSection, changeOutSection}: PortfolioProps) => {
  return (
    <section id="portfolio" className="py-10" onMouseOver={() => changeOnSection('portfolio')} onMouseOut={() => changeOutSection('portfolio')} onTouchMove={() => changeOnSection('portfolio')} data-aos="fade" data-aos-duration="2000">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">As a self-taught developer, I have gained valuable experience by building a variety of projects using different resources. Some of my projects were built by following tutorials to learn best practices, while others were entirely created from scratch. The projects listed below are examples of the latter, all of which were conceived, designed, and developed by me from start to finish.</p>

        <h1 className="text-xl py-2 leading-8 text-gray-800 dark:text-white">List of Projects</h1>
        <div className="text-md mb-2 leading-8 text-gray-800 dark:text-gray-200">
          <p>1. Smart Control</p>
          <p className="ml-2">Tools</p>
          <ul className="flex list-disc ml-8">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-wrap">
              <li className="mr-6">React.js</li>
              <li className="mr-6">Bootstrap5</li>
              <li className="mr-6">Node.js</li>
              <li className="mr-6">Express</li>
              <li className="mr-6">MongoDB</li>
            </div>
          </ul>
        </div>
        <div className="text-md mb-2 leading-8 text-gray-800 dark:text-gray-200">
          <p>2. Nurak Nava Apartment</p>
          <p className="ml-2">Tools</p>
          <ul className="flex list-disc ml-8">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-wrap">
              <li className="mr-6">React.js</li>
              <li className="mr-6">TypeScript</li>
              <li className="mr-6">Bootstrap5</li>
            </div>
          </ul>
        </div>
        <div className="text-md mb-2 leading-8 text-gray-800 dark:text-gray-200">
          <p>3. Prayer Todo</p>
          <p className="ml-2">Tools</p>
          <ul className="flex list-disc ml-8">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-wrap">
              <li className="mr-6">Python</li>
              <li className="mr-6">Flask</li>
              <li className="mr-6">SQLite</li>
              <li className="mr-6">Bootstrap5</li>
            </div>
          </ul>
        </div>
        <div className="text-md mb-2 leading-8 text-gray-800 dark:text-gray-200">
          <p>4. Modern Farming</p>
          <p className="ml-2">Tools</p>
          <ul className="flex list-disc ml-8">
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-wrap">
              <li className="mr-6">HTML5</li>
              <li className="mr-6">CSS</li>
              <li className="mr-6">JavaScript</li>
              <li className="mr-6">Bootstrap5</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 text-center md:mb-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <h1 className="dark:text-white mb-2 text-xl">Smart Control</h1>
          <img className="rounded-lg object-cover" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={web1} data-aos="fade-right" data-aos-duration="2000"/>
          <div>
            <button className="dark:text-white mt-4 m mr-14 bg-sky-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-400">
              <a href="https://www.youtube.com/watch?v=xQnmoYagTaM">Demo Video</a>
            </button>
            <button className="dark:text-white bg-lime-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-lime-400">
              <a href="https://github.com/ablazeArt/SmartControl.git">Code</a>
            </button>
          </div>
        </div>
        <div className="basis-1/3 flex-1 text-center md:mb-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <h1 className="dark:text-white mb-2 text-xl">Nurak Nava Apartment</h1>
          <img className="rounded-lg object-cover" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={web2} data-aos="fade-left" data-aos-duration="2000"/>
          <button className="dark:text-white mt-4 m mr-14 bg-sky-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-400">
            <a href="https://nuraknava.netlify.app/">Live Website</a>
          </button>
          <button className="dark:text-white bg-lime-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-lime-400">
            <a href="https://github.com/ablazeArt/NurakNava.git">Code</a>
          </button>
        </div>
        <div className="basis-1/3 flex-1 text-center md:mb-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <h1 className="dark:text-white mb-2 text-xl">Prayer Todo</h1>
          <img className="rounded-lg object-cover" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={web3} data-aos="fade-right" data-aos-duration="2000"/>
          <button className="dark:text-white mt-4 m mr-14 bg-sky-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-400">
            <a href="https://youtu.be/z4XKNoPvED4">Demo Video</a>
          </button>
          <button className="dark:text-white bg-lime-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:bg-lime-400">
            <a href="https://github.com/ablazeArt/prayer-todo.git">Code</a>
          </button>
        </div>
        <div className="basis-1/3 flex-1 text-center md:mb-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <h1 className="dark:text-white mb-2 text-xl">Mordern Farming</h1>
          <img className="rounded-lg object-cover" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={web4} data-aos="fade-left" data-aos-duration="2000"/>
          <button className="dark:text-white mt-4 m mr-14 bg-sky-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-400">
            <a href="https://www.canva.com/design/DAFarvJu0wc/oddRviNjuIeK63qPsyGgpA/view?utm_content=DAFarvJu0wc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink">POC Walkthrough</a>
          </button>
          <button className="dark:text-white bg-lime-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-lime-400">
            <a href="https://github.com/ablazeArt/ModernFarming.git">Code</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
