import React, { useState } from "react";
import AboutImage from "../assets/portfolio_img.jpg"; // Replace with your actual image path

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("Education");

  // Data for each section
  const skills = [
    "HTML, CSS & JS",
    "React.js & Tailwind CSS",
    "Java, Spring & Spring Boot",
  ];
  const education = [
    { year: "2021 - 2025", degree: "Bachelor of Science in Computer Science" },
    {
      year: "2017 - 2019",
      degree: "Higher Secondary Certificate (12th - UP Board)",
    },
    {
      year: "2015 - 2017",
      degree: "High School Certificate (10th - UP Board)",
    },
  ];

  return (
    <section
      className="bg-black text-white py-2 px-7 md:px-20 font-sans"
      id="about"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

      {/* About Me Section with Image and Content */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src={AboutImage}
            alt="About"
            className="min-w-72 h-96 object-cover rounded-md mb-6 md:mb-0 md:mr-8"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <p className="text-gray-300 mb-8 text-lg max-w-3xl text-justify ">
            I am a passionate student with a love for solving challenges through
            creative solutions. Currently, I’m diving into web development,
            exploring both front-end and back-end technologies. I enjoy building
            projects that are functional, user-friendly, and impactful. My goal
            is to create meaningful solutions that address real-world problems.
          </p>

          {/* Tabs for Education and Skills */}
          <div className="flex gap-8 mb-5 text-lg font-bold">
            <span
              className={`cursor-pointer ${
                activeTab === "Education"
                  ? "text-white border-b-2 border-pink-500"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </span>
            <span
              className={`cursor-pointer ${
                activeTab === "Skills"
                  ? "text-white border-b-2 border-pink-500"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("Skills")}
            >
              Skills
            </span>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "Education" && (
              <div className="space-y-6 mb-8">
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-pink-500 font-semibold mb-2">
                      {edu.year}
                    </p>
                    <p className="text-gray-300">{edu.degree}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Skills" && (
              <ul className="list-disc pl-5 text-gray-300 space-y-4 mb-8">
                {skills.map((skill, index) => (
                  <li key={index} className="mb-4">
                    {skill}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
