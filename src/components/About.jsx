import aboutImg1 from "../assets/undraw_Reading_time_re_phf7 2.svg";
import aboutImg2 from "../assets/undraw_My_universe_803e 1.svg";

import { motion } from "framer-motion";
// varriants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="md:w-1/2">
          <img src={aboutImg1} />
        </motion.div>
        {/* About content */}
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product
            <span className="text-[#59A3F9]"> for many years.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="bg-[#59A3F9] text-white py-4 font-semibold px-8 rounded hover:bg-primary transition-all duration-300 w-40">
            Get Started
          </button>
        </motion.div>
      </div>
      {/* 2nd part */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="md:w-1/2">
          <img src={aboutImg2} />
        </motion.div>
        {/* About content */}
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any
            <span className="text-[#59A3F9]"> time comvinent for you.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="bg-[#59A3F9] text-white py-4 font-semibold px-8 rounded hover:bg-primary transition-all duration-300 w-40">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
