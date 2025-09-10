// pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="mt-24 px-6 sm:px-12 md:px-20 lg:px-32 py-12 max-w-5xl mx-auto text-center">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
        About <span className="text-teal-600">PIXORA</span>
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-600 leading-relaxed mb-10">
        PIXORA is your creative AI companion, built to transform imagination
        into reality. By combining cutting-edge artificial intelligence with
        intuitive design, PIXORA enables anyone to generate stunning visuals
        instantly — whether you’re an artist, a designer, or just exploring your
        creativity.
      </p>

      {/* Sections */}
      <div className="grid sm:grid-cols-2 gap-10 text-left">
        {/* Mission */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            🎯 Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To make art generation accessible for everyone. We believe creativity
            has no limits, and PIXORA helps break barriers by bringing advanced
            AI tools to your fingertips.
          </p>
        </div>

        {/* Features */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            ✨ What You Can Do
          </h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Turn text prompts into high-quality images instantly</li>
            <li>Experiment with different artistic styles</li>
            <li>Download and share your creations with ease</li>
            <li>Grow your imagination without limits</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            🌍 Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We aim to inspire creativity worldwide by blending technology with
            art. PIXORA envisions a future where anyone, regardless of skill
            level, can express themselves visually with the help of AI.
          </p>
        </div>

        {/* Community */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            🤝 Join the Community
          </h2>
          <p className="text-gray-600 leading-relaxed">
            PIXORA is more than a tool — it’s a growing community of creators.
            Share your art, learn from others, and inspire the world together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
