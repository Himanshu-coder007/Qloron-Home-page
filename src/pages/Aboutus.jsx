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
      <div className="relative h-[250px] md:h-[300px] lg:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('conference.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0 z-1"
          style={{
            background:
              "linear-gradient(to right, rgba(16, 182, 194, 0.8), rgba(16, 182, 194, 0.5))",
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center max-w-4xl p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              We are a <span className="text-white">team</span> with a{" "}
              <span className="text-white">creative</span> approach to{" "}
              <span className="text-white">work</span>
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
            <h2 className="text-3xl font-extrabold text-[#10B6C2] sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              What makes us different and drives our success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Innovation Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#F3F4F6] p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#10B6C2] bg-opacity-20 rounded-full mb-4">
                  <FaLightbulb className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#10B6C2]">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We constantly push boundaries and explore new ideas to deliver
                  cutting-edge solutions.
                </p>
              </div>
            </div>

            {/* Collaboration Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#F3F4F6] p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#10B6C2] bg-opacity-20 rounded-full mb-4">
                  <FaUsers className="w-8 h-8 text-black"  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#10B6C2]">
                  Collaboration
                </h3>
                <p className="text-gray-600">
                  We believe in teamwork and building strong relationships with
                  our clients and partners.
                </p>
              </div>
            </div>

            {/* Growth Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#F3F4F6] p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#10B6C2] bg-opacity-20 rounded-full mb-4">
                  <FaChartLine className="w-8 h-8 text-black"  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#10B6C2]">
                  Growth
                </h3>
                <p className="text-gray-600">
                  We're committed to continuous learning and helping our clients
                  achieve sustainable growth.
                </p>
              </div>
            </div>

            {/* Integrity Card */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div className="bg-[#F3F4F6] p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#10B6C2] bg-opacity-20 rounded-full mb-4">
                  <FaHandshake className="w-8 h-8 text-black"/>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#10B6C2]">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We operate with honesty and transparency in all our
                  interactions and business dealings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Objectives Section */}
      <Principles />

      {/* Teams section */}
      <Team />

      {/* Projects section */}
      <Projects />
    </div>
  );
};

export default Aboutus;
