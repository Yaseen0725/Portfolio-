import React from "react";

// Importing project images
import ProjectImage1 from "../assets/myImg.jpg";
import ProjectImage2 from "../assets/myImg.jpg";
import ProjectImage3 from "../assets/myImg.jpg";

const ProjectSection = () => {
  // Array of project data
  const projects = [
    {
      title: "Project 1",
      description:
        "A modern web application built using React, Node.js, and MongoDB.",
      imageUrl: ProjectImage1, // Project 1 image
      demoUrl: "https://project1-demo.com", // Demo link
      repoUrl: "https://github.com/", // GitHub repo link
    },
    {
      title: "Project 2",
      description:
        "A mobile-responsive e-commerce site built with HTML, CSS, and JavaScript.",
      imageUrl: ProjectImage2, // Project 2 image
      demoUrl: "https://project2-demo.com", // Demo link
      repoUrl: "https://github.com/", // GitHub repo link
    },
    {
      title: "Project 3",
      description:
        "A weather forecasting app built with React and OpenWeatherMap API.",
      imageUrl: ProjectImage3, // Project 3 image
      demoUrl: "https://project3-demo.com", // Demo link
      repoUrl: "https://github.com/", // GitHub repo link
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-white text-white py-2" id="portfolio">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              {/* Image Section */}
              <img
                src={project.imageUrl} // Image of the project
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
                  {project.title}
                </h3>
                {/* Project Description */}
                <p className="text-lg mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {/* Demo Button */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full transition duration-300"
                  >
                    Live Demo
                  </a>
                  {/* GitHub Repo Button */}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full transition duration-300"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
