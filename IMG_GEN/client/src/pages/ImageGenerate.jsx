import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const ImageGenerate = () => {
  const [image, setImage] = useState(assets.sample_img_3);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const { generateImage } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    setLoading(true);
    const generatedImage = await generateImage(input);
    if (generatedImage) {
      setImage(generatedImage);
      setIsImageLoaded(true);
    }
    setLoading(false);
  };

  return (
    <section className="min-h-[87vh] bg-gradient-to-b from-teal-50 to-orange-50 flex flex-col items-center justify-center px-6 sm:px-12 py-20">
      <motion.form
        initial={{ opacity: 0.2, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 w-full max-w-3xl"
      >
        {/* Image Card */}
        <div className="relative w-full bg-white rounded-3xl shadow-2xl overflow-hidden p-4">
          <img
            src={image}
            alt="Generated"
            className="object-cover w-full h-80 rounded-2xl"
          />
          {loading && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white font-semibold text-lg animate-pulse">
                Generating image...
              </p>
            </div>
          )}
        </div>

        {/* Input Box */}
        <div className="flex w-full bg-white rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Describe what you want to generate"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-6 py-3 outline-none text-gray-800 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 sm:px-12 py-3 font-semibold rounded-full hover:from-indigo-500 hover:to-blue-600 transition-all"
          >
            Generate
          </button>
        </div>

        {/* Action Buttons */}
        {isImageLoaded && !loading && (
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <button
              onClick={() => setIsImageLoaded(false)}
              className="px-8 py-3 border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100 transition-all"
            >
              Generate Another
            </button>
            <a
              href={image}
              download
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-blue-600 transition-all"
            >
              Download
            </a>
          </div>
        )}
      </motion.form>
    </section>
  );
};

export default ImageGenerate;
