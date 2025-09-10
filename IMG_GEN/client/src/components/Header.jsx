import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/generate");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-teal-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          {user && (
            <p className="text-lg sm:text-xl text-gray-700 mb-4">
              Hi <span className="text-teal-600 font-semibold">{user.name}</span> 👋
            </p>
          )}

          <h1 className="font-anta text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Turn Your Words <br /> Into{" "}
            <span className="text-blue-600">AI Art</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Instantly transform your imagination into breathtaking AI-generated
            visuals. Create professional-grade images in just seconds.
          </p>

          <motion.button
            onClick={onClickHandler}
            className="mt-8 px-8 sm:px-12 py-3 sm:py-4 bg-blue-600 text-white text-lg font-medium rounded-full shadow-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {user ? "Start Creating" : "Generate Images"}
          </motion.button>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 sm:w-96 lg:w-[420px] rounded-3xl shadow-xl overflow-hidden">
            <img
              src={assets.download}
              alt="AI Art Sample"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
