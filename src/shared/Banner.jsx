// Motion
import { motion } from "framer-motion";
// varriants
import { fadeIn } from "../variants";

const Banner = ({ banner, heading, subheading, btn1, btn2 }) => {
  let btn22 = btn2;
  return (
    <div className="gradientBg  rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* Banner image */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={banner} alt="" className="lg:h-[386px] flipped-image" />
        </motion.div>
        {/* banner content */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md: w-3/5"
        >
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {heading}
          </h2>
          <p className="text-[#A5F887] md:text-2xl font-medium mb-8">
            {subheading}
          </p>
          <div className={`  space-y-4`}>
            <button className=" mr-6 bg-[#59A3F9] text-white py-4 font-semibold px-6 rounded hover:bg-primary transition-all duration-300 w-44">
              {btn1}
            </button>
            {
              btn22 &&
              <button className="bg-[#59A3F9] text-white py-4 font-semibold px-6 rounded hover:bg-primary transition-all duration-300 w-44">
              {btn22}
            </button>
            }
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
