// Stack.js
import React from "react";

// Technologies with names and CORS-friendly image URLs
const mobileTech = [
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#61DAFB",
    textColor: "#000",
  },
  {
    name: "JAVA",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    bgColor: "#049EF4",
    textColor: "#fff",
  },
  {
    name: "Kotlin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1024px-Kotlin_Icon.png",
    bgColor: "#339933",
    textColor: "#fff",
  },
  {
    name: "Flutter",
    image:
      "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
    bgColor: "#02569B",
    textColor: "#fff",
  },
  {
    name: "Ionic",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/1280px-Ionic_Logo.svg.png",
    bgColor: "#FFCA28",
    textColor: "#000",
  },
  {
    name: "Dart",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dart-logo.png/1024px-Dart-logo.png",
    bgColor: "#0083C9",
    textColor: "#fff",
  },
];

const webTech = [
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
    bgColor: "#E44D26",
    textColor: "#fff",
  },
  {
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    bgColor: "#264DE4",
    textColor: "#fff",
  },
  {
    name: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    bgColor: "#F0DB4F",
    textColor: "#323330",
  },
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#61DAFB",
    textColor: "#20232A",
  },
  {
    name: "Angular",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    bgColor: "#DD0031",
    textColor: "#fff",
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    bgColor: "#3178C6",
    textColor: "#fff",
  },
  {
    name: "Material Design",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/1200px-Google_Material_Design_Logo.svg.png",
    bgColor: "#757575",
    textColor: "#fff",
  },
  {
    name: ".NET",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#512BD4",
    textColor: "#fff",
  },
];

const desktopTech = [
  {
    name: "Angular",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
    bgColor: "#B52E31",
    textColor: "#fff",
  },
  {
    name: "Java",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    bgColor: "#007396",
    textColor: "#fff",
  },
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
    bgColor: "#61DAFB",
    textColor: "#20232A",
  },
  {
    name: ".NET",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#512BD4",
    textColor: "#fff",
  },
];

const backendTech = [
  {
    name: "Node JS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    bgColor: "#339933",
    textColor: "#fff",
  },
  {
    name: "PHP",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png",
    bgColor: "#777BB4",
    textColor: "#fff",
  },
  {
    name: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    bgColor: "#3776AB",
    textColor: "#FFD43B",
  },
  {
    name: "SQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png",
    bgColor: "#336791",
    textColor: "#fff",
  },
  {
    name: "Mongo DB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
    bgColor: "#47A248",
    textColor: "#fff",
  },
  {
    name: "Java",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    bgColor: "#007396",
    textColor: "#fff",
  },
  {
    name: ".NET",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png",
    bgColor: "#512BD4",
    textColor: "#fff",
  },
  {
    name: "Spring Boot",
    image:
      "https://www.clipartmax.com/png/middle/117-1171017_spring-logo-spring-framework-logo.png",
    bgColor: "#339933",
    textColor: "#fff",
  },
];

// Technology card component for consistency
const TechCard = ({ tech }) => {
  return (
    <div
      className="flex flex-col items-center p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
      style={{ backgroundColor: tech.bgColor }}
    >
      <div className="w-20 h-20 mb-4 bg-white rounded-full flex items-center justify-center p-2 shadow-sm">
        <img
          src={tech.image}
          alt={tech.name}
          className="w-full h-full object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5IDEzSDEzVjE5SDE1VjE1SDE5VjEzTTIxIDIxSDNWM0gyMVYyMU0xOSA5VjVIMTVWOUgxOU0xMyA5VjVIOVY5SDEzTTkgMTVWMTlIMTNWMTVIOVoiLz48L3N2Zz4=";
          }}
        />
      </div>
      <span
        className="font-bold text-md px-3 py-1 rounded-full"
        style={{
          color: tech.textColor,
          backgroundColor: `rgba(0,0,0,0.1)`,
        }}
      >
        {tech.name}
      </span>
    </div>
  );
};

// Final component
export default function Stack() {
  return (
    <div className="text-center px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Built With <span className="text-blue-500">Modern Technologies</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          Our team leverages cutting-edge technologies to deliver high-quality
          software solutions. From frontend to backend, we use the best tools
          for the job to ensure performance, scalability, and maintainability.
        </p>

        <div className="flex flex-col gap-16">
          {/* Mobile Development Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 text-blue-500">
                Mobile Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {mobileTech.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Web Development Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 text-blue-500">
                Web App Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {webTech.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Development Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 text-blue-500">
                Desktop App Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {desktopTech.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Backend Development Section */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <h3 className="text-2xl font-bold mb-8 text-blue-500">
                Backend Development
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {backendTech.map((tech, index) => (
                  <TechCard key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
