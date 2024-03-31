import { useState } from "react";
import dotGreen from "../assets/Rectangle 19.svg";
import dotYellow from "../assets/Rectangle 28.png";
import dotPink from "../assets/Rectangle 32.png";

import { motion } from "framer-motion";
// varriants
import { fadeIn } from "../variants";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "./src/assets/Rectangle 18.svg",
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence
        </p>

        {/* toggle pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition-all duration-500 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            name=""
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      {/* Pricing cards */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-3xl shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tartiary text-center my-5">{pkg.description}</p>
            <h2 className="mt-5 text-secondary text-4xl font-bold text-center">
              {isYearly ? `${pkg.yearlyPrice}$` : `${pkg.monthlyPrice}$`}
              <span className="text-base text-tartiary font-medium">
                /{isYearly ? "Year" : "Month"}
              </span>
            </h2>

            <ul className="mt-4 space-y-2 px-4">
              <li className="flex gap-3 items-center">
                <img
                  src={`${
                    pkg.name == "Start" || pkg.name == "Premium"
                      ? dotGreen
                      : dotYellow
                  } `}
                  alt=""
                  className="w-4 "
                />
                Videos of Lessons
              </li>
              <li className="flex gap-3 items-center">
                <img src={dotGreen} alt="" className="w-4" />
                Homework check
              </li>
              <li className="flex gap-3 items-center">
                <img
                  src={`${
                    pkg.name == "Advance" || pkg.name == "Premium"
                      ? dotGreen
                      : dotPink
                  } `}
                  alt=""
                  className="w-4"
                />
                Additional practical task
              </li>
              <li className="flex gap-3 items-center">
                <img
                  src={`${
                    pkg.name == "Advance" || pkg.name == "Premium"
                      ? dotGreen
                      : dotPink
                  } `}
                  alt=""
                  className="w-4"
                />
                Monthly conferences
              </li>
              <li className="flex gap-3 items-center">
                <img
                  src={`${
                    pkg.name == "Start" || pkg.name == "Advance"
                      ? dotPink
                      : dotGreen
                  } `}
                  alt=""
                  className="w-4"
                />
                Personal advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex justify-center items-center">
              <button className="border-solid border-2 border-[#59A3F9] text-[#59A3F9] rounded-lg p-3  hover:bg-[#59A3F9] hover:text-white transition-all duration-300 w-40">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Pricing;
