import cer1 from "../img/CS50x.png";
import cer2 from "../img/web-certificate.jpg";

interface CerificateProps {
  changeOnSection: (id: string) => void;
  changeOutSection: (id: string) => void;
}

const Certificate = ({ changeOnSection, changeOutSection }: CerificateProps) => {
  return (
    <section id="certificate" onMouseOver={() => changeOnSection('certificate')} onMouseOut={() => changeOutSection('certificate')} onTouchMove={() => changeOnSection('certificate')}>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Certificate</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          As a self-taught developer, I am always seeking out new opportunities to improve my
          <span className="text-teal-500"> skills </span>
          and
          <span className="text-teal-500"> knowledge</span>. Pursuing certification is just one way that I demonstrate my passion for the field and my commitment to excellence. In addition, I also learn from various sources such as blogs, YouTube, and Stack Overflow to improve my techniques and adopt best practices.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">list of Certificates</p>
        <div className="mb-2">
          <p className="text-md leading-8 text-gray-800 dark:text-gray-200">1. CS50: Introduction to Computer Science</p>
          <ul className="ml-8 list-disc">
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">A broad and robust understanding of computer science and programming</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">How to think algorithmically and solve programming problems efficiently</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">Familiarity in a number of languages, including C, Python, SQL, and JavaScript plus CSS and HTML</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">How to engage with a vibrant community of like-minded learners from all levels of experience</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">How to develop and present a final programming project to your peers</li>
          </ul>
        </div>
        <div>
          <p className="text-md leading-8 text-gray-800 dark:text-gray-200">2. The Complete Web Development Bootcamp</p>
          <ul className="ml-8 list-disc">
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">Build 16 web development projects for portfolio to apply for junior developer jobs.</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">Learn the latest technologies, including Javascript, React and Node.js.</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">Master frontend development with React.</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">Master backend development with Node.</li>
            <li className="text-md leading-8 text-gray-800 dark:text-gray-200">Learn professional developer best practices.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 text-center md:mb-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <h1 className="dark:text-white mb-2 text-xl">CS50 From Havard</h1>
            <img className="rounded-lg object-cover" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={cer1} />
            <div>
              <button className="dark:text-white mt-4 m mr-14 bg-sky-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-400">
                <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0">Course</a>
              </button>
              <button className="dark:text-white bg-lime-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-lime-400">
                <a href="https://www.canva.com/design/DAFax9Y7rV8/uK8mc4ir8__g1Q3kXiQX1g/view?utm_content=DAFax9Y7rV8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Certificate</a>
              </button>
            </div>
          </div>
          <div className="basis-1/3 flex-1 text-center md:mb-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <h1 className="dark:text-white mb-2 text-xl">Web Development Bootcamp</h1>
            <img className="rounded-lg object-cover" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={cer2} />
            <button className="dark:text-white mt-4 m mr-14 bg-sky-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-sky-400">
              <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_535397245863_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_1012728_._pd__._&matchtype=&gclid=EAIaIQobChMIjLWq7vaZ_QIVN5NmAh2RgQ5ZEAAYASAAEgJX1_D_BwE">Course</a>
            </button>
            <button className="dark:text-white bg-lime-600 rounded-lg px-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-lime-400">
              <a href="https://www.canva.com/design/DAFaxwykorI/RMgnY2FhZuk95YzNSAsNtw/view?utm_content=DAFaxwykorI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Certificate</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
