import React from "react";
import AboutImg from "../assets/myImg.jpg";

const AboutMe = () => {
  return (
    <div className="bg-white text-black px-3 md:px-12 lg:px-24 ">
      {/* Navbar Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-black mt-2">
          Passionate about coding & technology
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        {/* Left Section - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={AboutImg}
            alt="Profile"
            className="w-80 h-96 rounded-2xl shadow-md object-cover border-4 border-gray-200"
          />
        </div>

        {/* Right Section - Content */}
        <div className="w-full md:w-2/3 space-y-8 text-center md:text-left">
          <p className="text-black text-lg leading-relaxed">
            I'm a skilled Frontend & Backend Developer with expertise in
            building modern, scalable applications. I have worked on multiple
            projects, bringing ideas to life with technology.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Languages",
                content: "HTML, CSS, JavaScript, React.js",
              },
              { title: "Education", content: "B.Tech in Computer Science" },
              { title: "Projects", content: "Built 5+ full-stack projects" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 border rounded-2xl shadow-md text-center hover:shadow-lg transition transform hover:scale-105"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-md text-gray-600 mt-2">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Tools & Social Media */}
          <div>
            <h3 className="font-bold text-2xl text-black">
              Tools & Social Media
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
              {/* Tools Section */}
              {[
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
                  alt: "VS Code",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
                  alt: "IntelliJ IDEA",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                  alt: "Git",
                },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="w-12 h-12 bg-gray-50 border rounded-2xl shadow-md flex justify-center items-center p-3 hover:scale-110 transition transform hover:rotate-2"
                >
                  <img src={tool.src} alt={tool.alt} className="w-8 h-8" />
                </div>
              ))}

              {/* Social Media Section */}
              {[
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
                  alt: "LinkedIn",
                  link: "https://linkedin.com",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                  alt: "GitHub",
                  link: "https://github.com",
                },
                {
                  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
                  alt: "Facebook",
                  link: "https://facebook.com",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-50 border rounded-2xl shadow-md flex justify-center items-center p-3 hover:scale-110 transition transform hover:-rotate-1"
                >
                  <img src={social.src} alt={social.alt} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
