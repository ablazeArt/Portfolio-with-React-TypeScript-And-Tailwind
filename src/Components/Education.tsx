import { AiOutlineBranches } from "react-icons/ai";
import { FaUniversity } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

interface EducationProps {
  changeOnSection: (id: string) => void;
  changeOutSection: (id: string) => void;
}

const Education = ({ changeOnSection, changeOutSection }: EducationProps) => {
  return (
    <section id="education" className="mb-6" onMouseOver={() => changeOnSection("education")} onMouseOut={() => changeOutSection("education")} onTouchMove={() => changeOnSection('education')}> 
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Education</h3>
        <div className="flex mt-2">
          <FaUniversity className="text-2xl text-gray-600 dark:text-gray-400 mt-0.2 mr-3.5" />
          <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">King Mongkut's University of Technology Thonburi</p>
        </div>
        <div className="flex mt-3">
          <MdEngineering className="text-2xl text-gray-600 dark:text-gray-400 mt-0.2 mr-3.5" />
          <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">Bachelor of Engineering</p>
        </div>
        <div className="flex mt-2">
          <AiOutlineBranches className="text-3xl text-gray-600 dark:text-gray-400 mt-0.2 mr-2.5" />
          <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">Department of Control System and Instrumentation Engineering</p>
        </div>
        <p className="text-md mt-3  leading-8 text-gray-800 dark:text-gray-200">Although I have not studied Computer Science directly, I possess a strong foundation in programming and I'm confident in my ability to work as a programmer. Through my studies at university, I learned the basics of programming using the C language in my first year. Additionally, I have learned to write PLC language for machine control, including microcontrollers and IoT systems.</p>
      </div>
    </section>
  );
};

export default Education;
