import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-50 to-orange-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center px-6 sm:px-12"
      >
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-gray-900">
          How it Works
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-16 text-center max-w-2xl">
          Transform your words into stunning AI-generated images in just a few
          simple steps.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {stepsData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6 shadow-md">
                <img src={item.icon} alt="" className="w-8 h-8" />
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Steps;
