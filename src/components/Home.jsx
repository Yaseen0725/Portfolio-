import React from "react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (

    <div className="bg-white text-black py-16 flex flex-col md:flex-row-reverse items-center justify-center">
      {/* Image Section (Right) */}
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="src/assets/myImg.jpg"
          alt="Photo"
          className="w-80 h-80 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left px-6 mx-8">
        <h1 className="text-3xl font-bold">Hello, It's me</h1>
        <h1 className="text-6xl font-bold">Mohd Yaseen</h1>
        <h1 className="text-3xl font-bold">
        And I'm a{" "}
        <ReactTyped
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          strings={["Developer", "Coder", "Student"]}
          typeSpeed={70}
          backSpeed={80}
          loop={true}
        />
        </h1>
  
      <p className="mt-4 text-lg text-black text-justify">
          Welcome to my portfolio! I'm a frontend developer skilled in creating
          responsive, interactive web experiences. Using HTML, CSS, React.js,
          Tailwind CSS, Bootstrap, and JavaScript, I design seamless,
          user-friendly interfaces that deliver a smooth experience across
          devices
      </p>
     <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-4">
        <button
          onClick={() => window.open("path/to/resume.pdf", "_blank")} // Replace with actual resume URL
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
        Download CV
        </button>
      </div>
    </div>
  </div>
  );
};

export default Hero;


