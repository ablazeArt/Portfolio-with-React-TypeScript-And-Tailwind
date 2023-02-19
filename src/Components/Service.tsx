import backEnd from "../img/back-end.png";
import frontEnd from "../img/front-end.png";
import tools from "../img/tools.png";

interface ServicesProps {
  changeOnSection: (id: string) => void;
  changeOutSection: (id: string) => void;
}

const Services = ({changeOnSection, changeOutSection}: ServicesProps) => {
  return (
    <section id="services" onMouseOver={() =>changeOnSection('services')} onMouseOut={() =>changeOutSection('services')} onTouchMove={() => changeOnSection('services')} data-aos="fade-up" data-aos-duration="2000">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Services & Skills I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Throughout my journey as a web developer, I have successfully completed several projects involving web application design, responsive development, database integration, and functional optimization to meet specific 
          <span className="text-teal-500"> requirements.</span>
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I would love to collaborate with talented individuals to create elegant and user-friendly websites that can benefit people.</p>
      </div>
      <div className="lg:flex gap-10" data-aos="fade-down-right" data-aos-duration="2000">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <img className="mx-auto" src={frontEnd} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2  ">Front-end Skills</h3>
          <p className="py-2">creating custom, beautiful web designs that follow core design principles and are responsive on all devices.</p>
          <h4 className="py-4 text-teal-600">Front-end Tools I Use</h4>
          <p className="text-gray-800 py-1">React.js</p>
          <p className="text-gray-800 py-1">JavaScript</p>
          <p className="text-gray-800 py-1">TypeScript</p>
          <p className="text-gray-800 py-1">HTML5</p>
          <p className="text-gray-800 py-1">CSS</p>
          <p className="text-gray-800 py-1">Bootsrap5</p>
          <p className="text-gray-800 py-1">TailwindCSS</p>
          <p className="text-gray-800 py-1">RESTful API</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <img className="mx-auto" src={backEnd} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Back-end Skills</h3>
          <p className="py-2">Design the server-side code and database architecture to ensure optimal performance and meet the functional requirements of the web application.</p>
          <h4 className="py-4 text-teal-600">Back-end Tools I Use</h4>
          <p className="text-gray-800 py-1">Node.js</p>
          <p className="text-gray-800 py-1">Express.js</p>
          <p className="text-gray-800 py-1">Axios</p>
          <p className="text-gray-800 py-1">MongoDB</p>
          <p className="text-gray-800 py-1">SQLite</p>
          <p className="text-gray-800 py-1">python</p>
          <p className="text-gray-800 py-1">Flask</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <img className="mx-auto" src={tools} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2 ">Tools</h3>
          <p className="py-2">I possess strong communication skills and proficiency in collaboration tools, allowing for streamlined teamwork and effective collaboration.</p>
          <h4 className="py-4 text-teal-600">Others Tools I Use</h4>
          <p className="text-gray-800 py-1">Git / Github</p>
          <p className="text-gray-800 py-1">Postman</p>
          <p className="text-gray-800 py-1">VS code</p>
          <p className="text-gray-800 py-1">Canva</p>
          <p className="text-gray-800 py-1">Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Services