import React from "react";

const Hero = () => {
  return (
    <div className="bg-white text-black text-center py-16">
      <img
        src="src/assets/myImg.jpg"
        alt="Photo"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-5xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 ">
          Mohd Yaseen
        </span>
        , FrontEnd Developer
      </h1>
      <p className="mt-4 text-lg text-black text-justify m-8">
        I am a passionate student with a love for solving challenges through
        creative solutions. Currently, I’m diving into web development,
        exploring both front-end and back-end technologies. I enjoy building
        projects that are functional, user-friendly, and impactful. My goal is
        to create meaningful solutions that address real-world problems.
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
          onClick={() => window.open("path/to/resume.pdf", "_blank")} // Replace path/to/resume.pdf with your actual resume URL
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
      transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
