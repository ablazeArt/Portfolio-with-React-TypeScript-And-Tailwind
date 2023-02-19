import { AiOutlineComment, AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

interface ContactProps {
  changeOnSection: (id: string) => void;
  changeOutSection: (id: string) => void;
}

const Contact = ({changeOnSection, changeOutSection}: ContactProps) => {
    return (
        <section id="contact" className="pb-6" onMouseOver={() =>changeOnSection('contact')} onMouseOut={() =>changeOutSection('contact')} onTouchMove={() => changeOnSection('contact')} data-aos="flip-down" data-aos-duration="2000">
        <div>
          <h3 className="text-3xl py-1 dark:text-white ">Contact</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">I can be reached anytime via all of these methods.</p>
          <a className="flex mt-2 hover:bg-sky-400 dark:hover:bg-sky-700 rounded-lg" href="mailto:fuart.madnurak@gmail.com">
            <AiOutlineMail className="text-3xl text-gray-600 dark:text-gray-400 mt-0.2 mr-3" />
            <a className="text-md  leading-8 text-gray-800 dark:text-gray-200">Email:fuart.madnurak@gmail.com</a>
          </a>
          <div className="flex mt-3">
            <BsFillTelephoneInboundFill className="text-2xl text-gray-600 dark:text-gray-400 mt-0.2 mr-4" />
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">Tel. 098-925-1727</p>
          </div>
          <div className="flex mt-2">
            <AiOutlineComment className="text-3xl text-gray-600 dark:text-gray-400 mt-0.2 mr-3.5" />
            <p className="text-md  leading-8 text-gray-800 dark:text-gray-200">Line 098-925-1727</p>
          </div>
        </div>
      </section>
    )
}

export default Contact