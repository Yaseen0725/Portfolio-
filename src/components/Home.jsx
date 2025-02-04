import React from "react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="bg-white text-black text-center py-16">
      <img
        src="src/assets/myImg.jpg"
        alt="Photo"
        className="mx-auto mb-8 w-64 h-64 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-5xl font-bold">
        Hello I'm a{" "}
        <ReactTyped
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 "
          strings={["Developer", "Coder", "Student"]}
          typeSpeed={70}
          backSpeed={80}
          loop={true}
        />
      <p className="mt-4 text-lg text-black text-justify m-8">
         Welcome to my portfolio! I’m a frontend developer passionate about
        crafting responsive, interactive, and visually appealing web
        experiences. Using HTML, CSS, React.js, Tailwind CSS, Bootstrap, and
        JavaScript, I create seamless and user-friendly interfaces that perform
        flawlessly across all devices. I focus on delivering clean, optimized
        code and a smooth user experience. Explore my projects to see how I
        blend design with functionality to deliver impactful digital experiences
        that engage and inspire users.
      </p>
      <div className="mt-8 space-x-4">
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>

        {/* Resume Button */}
        <button
          onClick={() => window.open("path/to/resume.pdf", "_blank")}
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;

