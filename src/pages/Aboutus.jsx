import React from "react";
import Info from "../components/about/Info";
import { FaLightbulb, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";
import Principles from "../components/about/Principles";
import Team from "../components/about/Team";
import Projects from "../components/about/Projexts";

const Aboutus = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-150">
        {" "}
        {/* Changed from h-screen to h-96 */}
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('conference.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Content with light transparent background */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl p-8 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              We are a <span className="text-blue-600">team</span> with a{" "}
              <span className="text-purple-600">creative</span> approach to{" "}
              <span className="text-pink-600">work</span>
            </h1>
          </div>
        </div>
      </div>

      {/* About Qloron Section */}
      <Info />

      {/* Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              What makes us different and drives our success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Innovation Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <FaLightbulb className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="opacity-90">
                  We constantly push boundaries and explore new ideas to deliver
                  cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Collaboration Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 text-white">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <FaUsers className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="opacity-90">
                  We believe in teamwork and building strong relationships with
                  our clients and partners.
                </p>
              </div>
            </div>

            {/* Growth Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-6 text-white">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <FaChartLine className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growth</h3>
                <p className="opacity-90">
                  We're committed to continuous learning and helping our clients
                  achieve sustainable growth.
                </p>
              </div>
            </div>

            {/* Integrity Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-400 p-6 text-white">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                  <FaHandshake className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="opacity-90">
                  We operate with honesty and transparency in all our
                  interactions and business dealings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Objectives Section */}
      <Principles/>

      {/* Teams section */}
      <Team/>

      {/* Projects section */}
     <Projects/>
    </div>
  );
};

export default Aboutus;
