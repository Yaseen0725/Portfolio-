import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaLaptopCode,
} from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-black">My Services</h2>
        <p className="text-lg text-gray-700 mb-12">
          I specialize in providing high-quality development services using the
          latest technologies to bring your ideas to life. Here are the key
          areas I focus on:
        </p>
        {/* Four boxes in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Web Development */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <FaCode className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black">Web Development</h3>
            <p className="text-gray-800 mt-2">
              I build interactive and responsive websites using technologies
              like HTML, CSS, JavaScript, and React.
            </p>
          </div>

          {/* Web Design */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <FaPaintBrush className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black">Web Design</h3>
            <p className="text-gray-800 mt-2">
              I create visually stunning and user-friendly designs that enhance
              the user experience.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <FaMobileAlt className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black">Responsive Design</h3>
            <p className="text-gray-800 mt-2">
              Ensuring that your website looks great on all devices with a fully
              responsive design.
            </p>
          </div>

          {/* Java Development */}
          <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
            <FaLaptopCode className="text-5xl text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-black">Java Development</h3>
            <p className="text-gray-800 mt-2">
              I specialize in developing robust Java applications, utilizing
              frameworks like Spring Boot and Hibernate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
